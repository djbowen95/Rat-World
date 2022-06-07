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
  const [ratFormState, setRatFormState] = useState({ name: "" });
  const [ratInput, setRatInput] = useState("");
  const [createRat, { error }] = useMutation(CREATE_RAT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRatFormState({ name: value });
    setRatInput(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createRat({
        variables: {...ratFormState},
      });
    } catch (err) {
      console.log(err);
    };

    console.log("Rat function finished.")
    setRatInput("");
  };

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
                value={ratInput}
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