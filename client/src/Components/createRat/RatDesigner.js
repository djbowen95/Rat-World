import React, { useState } from "react";
import { headArray, bodyArray, bumArray } from "../../images/ratParts";

function RatDesigner() {
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

  let [ratHeadIndex, setRatHead] = useState(0);
  let [ratBodyIndex, setRatBody] = useState(0);
  let [ratBumIndex, setRatBum] = useState(0);

  function changeBodyPart(e) {
    if (e.target.dataset.bodypart === "head") {
      if (e.target.dataset.nextprevious === "next") {
        setRatHead((ratHeadIndex += 1));
      } else {
        setRatHead((ratHeadIndex -= 1));
      }
    }
    if (e.target.dataset.bodypart === "body") {
      if (e.target.dataset.nextprevious === "next") {
        setRatBody((ratBodyIndex += 1));
      } else {
        setRatBody((ratBodyIndex -= 1));
      }
    }
    if (e.target.dataset.bodypart === "bum") {
      if (e.target.dataset.nextprevious === "next") {
        setRatBum((ratBumIndex += 1));
      } else {
        setRatBum((ratBumIndex -= 1));
      }
    }
  }

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.controller}>
          <button
            data-bodypart="bum"
            data-nextprevious="next"
            onClick={changeBodyPart}
            disabled={ratBumIndex >= bumArray.length - 1}
          >
            ^
          </button>
          <img style={styles.bum} src={bumArray[ratBumIndex]} />
          <button
            data-bodypart="bum"
            data-nextprevious="previous"
            onClick={changeBodyPart}
            disabled={ratBumIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.controller}>
          <button
            data-bodypart="body"
            data-nextprevious="next"
            onClick={changeBodyPart}
            disabled={ratBodyIndex >= bodyArray.length - 1}
          >
            ^
          </button>
          <img style={styles.body} src={bodyArray[ratBodyIndex]} />
          <button
            data-bodypart="body"
            data-nextprevious="previous"
            onClick={changeBodyPart}
            disabled={ratBodyIndex <= 0}
          >
            ^
          </button>
        </div>
        <div style={styles.controller}>
          <button
            data-bodypart="head"
            data-nextprevious="next"
            onClick={changeBodyPart}
            disabled={ratHeadIndex >= headArray.length - 1}
          >
            ^
          </button>
          <img style={styles.head} src={headArray[ratHeadIndex]} />
          <button
            data-bodypart="head"
            data-nextprevious="previous"
            onClick={changeBodyPart}
            disabled={ratHeadIndex <= 0}
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatDesigner;
