import React from "react";
import styles from "./viewMyRatsStyles";
import { bumArray, headArray, bodyArray } from "../../../images/ratParts";


function RatCard (props) {
    
    function getAge() {
        return;
    };

    function getLastFed() {
        return;
    };

    function getHungerLevel() {
        return;
    };

    return <div>
        <li style={styles.card}>
        <img src={bumArray[props.rat.bumIndex]} style={styles.ratBum} width="100px"/>
        <img src={bodyArray[props.rat.bodyIndex]} style={styles.ratBody} width="80px"/>
        <img src={headArray[props.rat.headIndex]} style={styles.ratHead} width="60px" />
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
          <button class="work-btn">Go to Work</button>
        </div>
      </li>
    </div>
};

export default RatCard;