import React, { useState } from "react";
import { headArray, bodyArray, bumArray } from "../../images/ratParts";

function RatDesigner(props) {
  const styles = {
    container: {
      display: "flex",
    },
    head: {
      width: "150px",
    },
    body: {
      width: "200px",
    },
    bum: {
      width: "250px",
    },
    controller: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.controller}>
          <button
            data-bodypart="bum"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratBumIndex >= bumArray.length - 1}
          >
            ^
          </button>
          <img style={styles.bum} src={bumArray[props.ratBumIndex]} id="ratBumImage" />
          <button
            data-bodypart="bum"
            data-nextprevious="previous"
            onClick={props.changeBodyPart}
            disabled={props.ratBumIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.controller}>
          <button
            data-bodypart="body"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratBodyIndex >= bodyArray.length - 1}
          >
            ^
          </button>
          <img style={styles.body} src={bodyArray[props.ratBodyIndex]} />
          <button
            data-bodypart="body"
            data-nextprevious="previous"
            onClick={props.changeBodyPart}
            disabled={props.ratBodyIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.controller}>
          <button
            data-bodypart="head"
            data-nextprevious="next"
            onClick={props.changeBodyPart}
            disabled={props.ratHeadIndex >= headArray.length - 1}
          >
            ^
          </button>
          <img style={styles.head} src={headArray[props.ratHeadIndex]} />
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
