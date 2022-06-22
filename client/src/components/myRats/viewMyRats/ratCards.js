import React from "react";
import { useMutation } from "@apollo/client";
import { FEED_RAT, ATTEND_WORK } from "../../../utils/mutations";
import moment from "moment";

import styles from "./ratStyles";
import { bumArray, headArray, bodyArray } from "../../../images/ratParts";
import Auth from "../../../utils/Auth";

function RatCard(props) {
  const [feedRatMutation, { error }] = useMutation(FEED_RAT);

  function feedRat() {
    const ratsId = props.rat._id;
    try {
      const { data } = feedRatMutation({
        variables: { ratId: ratsId },
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload(); // Must be a better way to do this.
  }

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
      return `${Math.floor(hours / 168)} weeks and ${Math.floor(
        hours / 24
      )} days old`;
    }
  }

  function getLastFed() {
    const lastFed = props.rat.fedAt;
    const difference = now - lastFed;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    if (hours === 0) {
      return "Just fed!";
    }
    return `${hours} hours ago`;
  }

  function getHungerLevel() {
    const lastFed = props.rat.fedAt;
    const difference = now - lastFed;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    if (hours < 8) {
      return "Completely Full";
    } else if (hours < 24) {
      return "Satisfied";
    } else if (hours < 48) {
      return "A bit hungry";
    } else if (hours < 72) {
      return "Starving";
    } else {
      return "Angry little beast";
    }
  }

  function progressBar() {
    const lastFed = props.rat.fedAt;
    const difference = now - lastFed;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const barWidth = `${100 - hours * 3}%`;
    let barColor = "";
    if (hours < 33) {
      barColor = "green";
    } else if (hours < 66) {
      barColor = "orange";
    } else {
      barColor = "red";
    }
    return {
      backgroundColor: barColor,
      width: barWidth,
      height: "10px",
      borderRadius: "10px",
    };
  }

  const [attendWork, { err }] = useMutation(ATTEND_WORK);

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
      if (!props.rat.attendedWork) {
        return (
          <button className="work-btn" onClick={attendWorkHandler}>
            Go to Work
          </button>
        );
      }
      if (Date.now() < props.rat.attendedWork + 86400000) {
        return (
          <button className="work-btn" onClick={attendWorkHandler}>
            Go to Work
          </button>
        );
      } else
        return (
          <p>{props.rat.name} has been to work already today, let them rest!</p>
        );
    } else return <p className="work-btn">Get a job you bum!</p>;
  }

  return (
      <div style={styles.card}>
        <h3 style={styles.cardHeading}>{props.rat.name}</h3>
        <div style={styles.imgContainer}>
          <img src={bumArray[props.rat.bumIndex]} style={styles.ratBum} />
          <img src={bodyArray[props.rat.bodyIndex]} style={styles.ratBody} />
          <img src={headArray[props.rat.headIndex]} style={styles.ratHead} />
        </div>
        <p style={styles.p}>
          <strong>Age:</strong> {getAge()} <br />
          <strong>Job:</strong> {getJob()} <br />
          <strong>Last Worked:</strong>{" "}
          {props.rat.attendedWork
            ? moment
                .unix(props.rat.attendedWork / 1000)
                .utc()
                .format("DD/MM/yyy HH:mm")
            : "Never"}{" "}
          <br />
          <br />
          <strong>Rattributes: </strong>
          {props.rat.rattributes[0]}, {props.rat.rattributes[1]},{" "}
          {props.rat.rattributes[2]}, {props.rat.rattributes[3]},{" "}
          {props.rat.rattributes[4]} 
          <br />
          <br />
          Maze-Solving: {props.rat.mazeSolving} | Speed: {props.rat.speed} |
          Trap Avoidance: {props.rat.trapAvoidance} | Magic: {props.rat.magic}{" "}
          <br />
          <br />
          <strong>Last Fed:</strong> {getLastFed()} <br />
          <strong>Hunger Level:</strong> {getHungerLevel()} <br />
        </p>
        <div style={styles.progressBarOutline}>
          <div style={progressBar()}></div>
        </div>
        <div className="buttons">
          <button className="feed-btn" onClick={feedRat}>
            Feed Rat!
          </button>
          {recentlyAttendedWork()}
        </div>
      </div>
  );
}

export default RatCard;
