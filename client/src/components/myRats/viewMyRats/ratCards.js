import React from "react";
import styles from "./ratStyles";
import { bumArray, headArray, bodyArray } from "../../../images/ratParts";


function RatCard (props) {
  function getJob() {
    if (!props.rat.job) {
      return "Unemployed";
    }
    return props.rat.job.jobName;
  };

    function getAge() {
        return;
    };

    function getLastFed() {
        return;
    };

    function getHungerLevel() {
        return;
    };

    function formatDate (date) {
      return new Date(date).toLocaleString();
  };

    return <div>
        <li style={styles.card}>
        <img src={bumArray[props.rat.bumIndex]} style={styles.ratBum} />
        <img src={bodyArray[props.rat.bodyIndex]} style={styles.ratBody} />
        <img src={headArray[props.rat.headIndex]} style={styles.ratHead} />
        <h3 style={styles.cardHeading}>{props.rat.name}</h3>
        <p style={styles.p}>
          Age: {props.rat.createdAt} <br />
          Last Fed: {props.rat.fedAt} <br />
          Last Worked: {props.rat.attendedWork} <br />
          Job: {getJob()} <br />
          Rattributes: {props.rat.rattributes[0]}, {props.rat.rattributes[1]}, {props.rat.rattributes[2]}, {props.rat.rattributes[3]}, {props.rat.rattributes[4]} <br />
          Maze-Solving: {props.rat.mazeSolving} <br />
          Speed: {props.rat.speed} <br/>
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
};

export default RatCard;

