import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/Auth";
import { margin } from "@mui/system";
import { fontFamily } from "@mui/system";

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
    height: "100%"
  },
  input: {
    backgroundColor: "#9effcf",
    padding: "8px",
    margin: "1px",
    borderRadius: "5px"
  },
  title: {
    color: 'white',
    textShadow: '2px 2px 0px black',
    margin: "5px",
    textDecoration: "underline"
  }
};

//Login
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log("success");
      Auth.login(data.login.token);
      Auth.getProfile();
      window.location.replace("/myrats")
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <h2 style={styles.title} aria-hidden="true">
          Login
        </h2>
        <input
          style={styles.input}
          type="email"
          name="email"
          id="email"
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
        <button type="submit">Login</button>
      </form>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};
export default Login;
