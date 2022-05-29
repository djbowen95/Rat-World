import React, { useState } from "react";
import ratHead1 from "../../images/ratHeads/rathead.png";
import ratHead2 from "../../images/ratHeads/rathead2.png";
import ratHead3 from "../../images/ratHeads/ratfemmehead1.png";
import ratBody1 from "../../images/ratBody/ratbody.png";
import ratBody2 from "../../images/ratBody/ratbodytshirt.png";
import ratBody3 from "../../images/ratBody/ratfemmemiddle1.png";
import ratBum1 from "../../images/ratBum/ratbum1.png";
import ratBum2 from "../../images/ratBum/ratbum2.png";
import ratBum3 from "../../images/ratBum/ratfemmebum1.png";

const headArray = [ratHead1, ratHead2, ratHead3];
const bodyArray = [ratBody1, ratBody2, ratBody3];
const bumArray = [ratBum1, ratBum2, ratBum3];

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
