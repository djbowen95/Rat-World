import React from "react";
import RatDesigner from "./RatDesigner";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_RAT } from "../../utils/mutations";

const styles = {
  title: {
    textAlign: "center",
  },
  card: {
    textAlign: "center",
    marginTop: "100px",
  },
  img: {
    width: "20%",
  },
  cardTitle: {
    fontSize: "25px",
  },
  input: {
    width: "200px",
    padding: "5px",
    borderRadius: "5px",
  },
  btn: {
    padding: "5px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

const Rat = () => {
  // useEffect (can be last step) (if want it to appear on the page/reload)
  const [ratFormState, setRatFormState] = useState({ name: "" });
  const [createRat, { error }] = useMutation(CREATE_RAT);

  const handleInputChange = (event) => {
    const { name, value } = event.target; // I think 'name' here is different
    setRatFormState({ name: value });
    console.log(ratFormState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createRat({
        variables: {...ratFormState},
      }
      );
      console.log("Sent the the database, hopefully.")
      console.log(data);
      // window.location.reload();
    } catch (err) {
      console.log(err);
      console.log("Not sent.")
    }
  };

  // Handle input change - track the user input, use set myRat useState to feed the variable
  // Connect handle input change with an onChange to the right input
  // Handle submit (onClick / button) - commit the info of myRat through the useMutation to the backend

  return (
    <div style={styles.title}>
      <div>
        <h1 className="title">Adopt A Rat!</h1>
      </div>

      <div className="container" style={styles.card}>
        <div className="card">
          <RatDesigner />
          <div className="card-body">
            <h5 className="card-title" style={styles.cardTitle}>
              Rattata
            </h5>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                style={styles.input}
                type="text"
                className="input"
                placeholder="Name Your Rat!"
                onChange={handleInputChange}
              ></input>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rat;

// const [ratFormData, setRatFormData] = useState({name: ""});

// const [createRat, {error}] = useMutation(CREATE_RAT);

// const handleInputChange = (event) => {
//   const { name, value } = event.target; // I think 'name' here is different
//   setRatFormData({...ratFormData, name: value});
// }

// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   const form = event.currentTarget;
//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   try {
//     const { data } = await createRat({variables: ratFormData});
//   } catch (err) {
//     console.log(err);
//     console.log("This is an error with the Create Rat Form.");
//     console.log(ratFormData);
//   }

//   setRatFormData({name: ""});
// };
