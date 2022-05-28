const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validRegisterInput = require("../validation/valid_register");
const validLoginInput = require("../validation/valid_login");

let User = require('../models/User');

//function for getting all user
exports.get_all_users = ((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//function for registering a user
exports.register = ((req, res) => {

    const { errors, isValid } = validRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
    });

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        });
    });
});

//function for login user
exports.login = ((req, res) => {

    const { errors, isValid } = validLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET, {
                        expiresIn: '3h'
                    },
                    (err, token) => {
                        res.json({
                            payload,
                            success: true,
                            token: token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});


//function for required login when user needs to do action
exports.requireLogin = (req, res, next) => {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();

}