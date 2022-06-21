import React, { useState } from "react";
import { headArray, bodyArray, bumArray } from "../../../images/ratParts";

function RatDesigner(props) {
  const styles = {
    overallWidth: {
      width: "60%"
    },
    container: {
      display: "flex",
    },
    head: {
      width: "25%",
      display: "flex",
      flexDirection: "column",
    },
    body: {
      width: "33.3333%",
      display: "flex",
      flexDirection: "column",
    },
    bum: {
      width: "41.6667%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div style={styles.overallWidth}>
      <div style={styles.container}>
        <div style={styles.bum}>
          <button
            data-bodypart="bum"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratBumIndex >= bumArray.length - 1}
          >
            ^
          </button>
          <img src={bumArray[props.ratBumIndex]} id="ratBumImage" />
          <button
            data-bodypart="bum"
            data-nextprevious="previous"
            onClick={props.changeBodyPart}
            disabled={props.ratBumIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.body}>
          <button
            data-bodypart="body"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratBodyIndex >= bodyArray.length - 1}
          >
            ^
          </button>
          <img src={bodyArray[props.ratBodyIndex]} />
          <button
            data-bodypart="body"
            data-nextprevious="previous"
            onClick={props.changeBodyPart}
            disabled={props.ratBodyIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.head}>
          <button
            data-bodypart="head"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratHeadIndex >= headArray.length - 1}
          >
            ^
          </button>
          <img src={headArray[props.ratHeadIndex]} />
          <button
            data-bodypart="head"
            data-nextprevious="previous"
            onClick={props.changeBodyPart}
            disabled={props.ratHeadIndex <= 0}
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatDesigner;
