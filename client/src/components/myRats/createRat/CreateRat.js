import React from "react";
import RatDesigner from "./RatDesigner";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_RAT } from "../../../utils/mutations";
import Auth from "../../../utils/Auth";

const styles = {
  title: {
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "25px",
  },
  input: {
    padding: "10px",
    backgroundColor: "rgb(228 212 247)",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px black inset",
    fontWeight: "bold",
  },
  designContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const CreateRat = () => {
  const userId = Auth.getProfile().data._id;

  const [ratFormState, setRatFormState] = useState({
    name: "",
    headIndex: 0,
    bodyIndex: 0,
    bumIndex: 0,
  });
  const [ratInput, setRatInput] = useState("");

  let [ratHeadIndex, setRatHead] = useState(0);
  let [ratBodyIndex, setRatBody] = useState(0);
  let [ratBumIndex, setRatBum] = useState(0);

  const [createRat, { error }] = useMutation(CREATE_RAT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRatFormState({ ...ratFormState, name: value });
    setRatInput(value);
    // Not sure why console log of 'ratInput' here puts the previous value.
  };

  function changeBodyPart(e) {
    if (e.target.dataset.bodypart === "head") {
      if (e.target.dataset.nextprevious === "next") {
        setRatHead((ratHeadIndex += 1));
      } else {
        setRatHead((ratHeadIndex -= 1));
      }
      setRatFormState({ ...ratFormState, headIndex: ratHeadIndex });
    }
    if (e.target.dataset.bodypart === "body") {
      if (e.target.dataset.nextprevious === "next") {
        setRatBody((ratBodyIndex += 1));
      } else {
        setRatBody((ratBodyIndex -= 1));
      }
      setRatFormState({ ...ratFormState, bodyIndex: ratBodyIndex });
    }
    if (e.target.dataset.bodypart === "bum") {
      if (e.target.dataset.nextprevious === "next") {
        setRatBum((ratBumIndex += 1));
      } else {
        setRatBum((ratBumIndex -= 1));
      }
      setRatFormState({ ...ratFormState, bumIndex: ratBumIndex });
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createRat({
        variables: { ...ratFormState, userId: userId },
      });
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <div style={styles.title}>
      <div>
        <h1 className="title">Adopt A Rat!</h1>
      </div>
        <div className="card" style={styles.designContainer}>
          <RatDesigner
            changeBodyPart={changeBodyPart}
            ratHeadIndex={ratHeadIndex}
            ratBodyIndex={ratBodyIndex}
            ratBumIndex={ratBumIndex}
          ></RatDesigner>
          <form onSubmit={handleFormSubmit}>
            <input
              style={styles.input}
              type="text"
              className="input"
              placeholder="Name Your Rat!"
              onChange={handleInputChange}
              value={ratInput}
            ></input>
            <button type="submit">Adopt!</button>
          </form>
        </div>
    </div>
  );
};

export default CreateRat;
