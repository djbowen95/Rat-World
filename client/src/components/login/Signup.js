import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/Auth";

const styles = {
  container: {
    backgroundColor: "rgb(231 155 128)",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0px 0px 5px black",
    margin: "10px",
    width: "40%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  input: {
    backgroundColor: "#9effcf",
    padding: "8px",
    margin: "1px",
    borderRadius: "5px",
  },
  title: {
    color: "white",
    textShadow: "2px 2px 0px black",
    margin: "5px",
    textDecoration: "underline",
  },
  errorMessage: {
    textAlign: "center",
    fontStyle: "oblique",
    fontWeight: "bold"
  }
};

//Signup
const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await register({
        variables: { ...formState },
      });
      Auth.login(data.register.token);
      window.location.replace("/myrats");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <h2 style={styles.title} aria-hidden="true">
          Sign up
        </h2>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Username"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>
          Sign up
        </button>
        <br/>
        <div style={styles.errorMessage}>
          {error ? error.message : ""}
        </div>
      </form>
    </div>
  );
};

export default Signup;
