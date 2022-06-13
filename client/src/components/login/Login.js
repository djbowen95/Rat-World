import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/Auth';

const styles = {
  body: {
    width: "350px",
    height: "500px",
    background: "grey",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "5px 20px 50px #000",
  },
  login: {
    height: "460px",
    background: "rgb(250, 250, 250)",
    borderRadius: "60% / 30%",
    display: "inline-block",
    width: "350px",
    border: "black",
    padding: "50px",
    margin: "20px",
  },
  label: {
    color: "#573b8a",
    fontSize: "2.3em",
    justifyContent: "center",
    display: "flex",
    margin: "60px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.5s ease-in-out",
  },
  input: {
    width: "60%",
    height: "20px",
    background: "#e0dede",
    justifyContent: "center",
    display: "flex",
    margin: "20px auto",
    padding: "10px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
  },
  button: {
    width: "60%",
    height: "40px",
    margin: "10px auto",
    justifyContent: "center",
    display: "block",
    color: "#fff",
    background: "#573b8a",
    fontSize: "1em",
    fontWeight: "bold",
    marginTop: "20px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    transition: "0.2s ease-in",
    cursor: "pointer",
  },
};

//Login
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  console.log(Auth.getProfile());

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log("success")
      Auth.login(data.login.token);
      Auth.getProfile();
    } 
    catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <body>
      
      <div>
      {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/myrats">back to the homepage.</Link>
              </p>
            ) : (
        <div style={styles.login}>
          <form onSubmit={handleFormSubmit} style={styles.form}>
            <label style={styles.label} aria-hidden="true">
              Login
            </label>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange= {handleChange}
              required=""
            />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="******"
              value={formState.password}
              onChange= {handleChange}
              required=""
            />
            <button style={styles.button} type= "submit">Login</button>
          </form>
          <a href="/signup">Register Here</a>
        </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
      </div>
    </body>
  );
}
export default Login;
