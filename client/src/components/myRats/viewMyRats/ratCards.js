import React from "react";
import styles from "./ratStyles";
import { bumArray, headArray, bodyArray } from "../../../images/ratParts";
import { ATTEND_WORK } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/Auth";

function RatCard(props) {
  function getAge() {
    return;
  }

  function getLastFed() {
    return;
  }

  function getHungerLevel() {
    return;
  }

  function formatDate(date) {
    return new Date(date).toLocaleString();
  }
  console.log(props.rat);
  const [attendWork, { error }] = useMutation(ATTEND_WORK);

  async function attendWorkHandler() {
    const ratId = props.rat._id;
    const userId = Auth.getProfile().data._id;
    try {
      const { data } = await attendWork({
        variables: { ratId, userId },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function recentlyAttendedWork() {
    if (props.rat.job) {
      if (!props.rat.attendedWork) {return <button class="work-btn" onClick={attendWorkHandler}>Go to Work</button>}
      if (Date.now() < props.rat.attendWork + 86400000) {
        return (
          <button class="work-btn" onClick={attendWorkHandler}>
            Go to Work
          </button>
        );
      } else
        return (
          <p>{props.rat.name} has been to work already today, let them rest!</p>
        );
    } else return <p class="work-btn">Get a job you bum!</p>;
  }

  return (
    <div>
      <li style={styles.card}>
        <img src={bumArray[props.rat.bumIndex]} style={styles.ratBum} />
        <img src={bodyArray[props.rat.bodyIndex]} style={styles.ratBody} />
        <img src={headArray[props.rat.headIndex]} style={styles.ratHead} />
        <h3 style={styles.cardHeading}>{props.rat.name}</h3>
        <p style={styles.p}>
          Age: {props.rat.createdAt} <br />
          Job: [ Developer ] <br />
          Last Fed: {props.rat.fedAt}
        </p>
        <div style={styles.progressBarOutline}>
          <div style={styles.progressBar}></div>
        </div>
        <div class="buttons">
          <button class="feed-btn">Feed Rat!</button>
          {recentlyAttendedWork()}
        </div>
      </li>
    </div>
  );
}

export default RatCard;
