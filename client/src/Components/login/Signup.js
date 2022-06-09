import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';

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
  signup: {
    height: "460px",
    background: "rgb(250, 250, 250)",
    float: "left",
    borderRadius: "60% / 30%",
    width: "350px",
    border: "black",
    padding: "50px",
    margin: "20px",
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

//Signup
const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
  <div>
        {/* <input style={styles.input} type="checkbox" aria-hidden="true" /> */}

        <div style={styles.signup}>
          <form style={styles.form}>
            <label style={styles.label} aria-hidden="true">
              Sign up
            </label>
            <input
              style={styles.input}
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              style={styles.input}
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button style={styles.button}>Sign up</button>
          </form>
        </div>
      </div>
  )
};

export default Signup;