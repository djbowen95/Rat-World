import React from "react";
import styles from "./ratStyles";
import { bumArray, headArray, bodyArray } from "../../../images/ratParts";

function RatCard(props) {
  const now = Date.now();

  function getJob() {
    if (!props.rat.job) {
      return "Unemployed";
    }
    return props.rat.job.jobName;
  }

  function getAge() {
    const ageString = props.rat.createdAt;
    const difference = now - ageString;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    if (hours < 1) {
      return "Just born!";
    } else if (hours === 1) {
      return "Adopted 1 hour ago";
    } else if (hours < 24) {
      return `Adopted ${hours} hours ago`;
    } else if (hours < 168) {
      return `${Math.floor(hours / 24)} days and ${hours % 24} hours old`;
    } else {
      return `${Math.floor(hours / 168)} weeks and ${Math.floor(hours / 24)} days old`;
    }
  };
  
  function getLastFed() {
    return;
  }

  function getHungerLevel() {
    return;
  }

  function formatDate(date) {
    return new Date(date).toLocaleString();
  }

  return (
    <div>
      <li style={styles.card}>
        <img src={bumArray[props.rat.bumIndex]} style={styles.ratBum} />
        <img src={bodyArray[props.rat.bodyIndex]} style={styles.ratBody} />
        <img src={headArray[props.rat.headIndex]} style={styles.ratHead} />
        <h3 style={styles.cardHeading}>{props.rat.name}</h3>
        <p style={styles.p}>
          Age: {getAge()} <br />
          Last Fed: {props.rat.fedAt} <br />
          Last Worked: {props.rat.attendedWork} <br />
          Job: {getJob()} <br />
          Rattributes: {props.rat.rattributes[0]}, {props.rat.rattributes[1]},{" "}
          {props.rat.rattributes[2]}, {props.rat.rattributes[3]},{" "}
          {props.rat.rattributes[4]} <br />
          Maze-Solving: {props.rat.mazeSolving} <br />
          Speed: {props.rat.speed} <br />
          Trap Avoidance: {props.rat.trapAvoidance} <br />
          Magic: {props.rat.magic} <br />
        </p>
        <div style={styles.progressBarOutline}>
          <div style={styles.progressBar}></div>
        </div>
        <div class="buttons">
          <button class="feed-btn">Feed Rat!</button>
          <button class="work-btn">Go to Work</button>
        </div>
      </li>
    </div>
  );
}

export default RatCard;
