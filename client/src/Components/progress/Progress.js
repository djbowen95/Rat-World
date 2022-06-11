import React from "react";
const styles = {
  ProgressOuter: {
    background: "#fff",
    borderRadius: "50px",
    padding: "25px",
    margin: "10px 0",
    boxShadow: "0 0 10px rgba(209, 219, 231, 0.7)",
  },
  Progress: {
    height: "27px",
    margin: "0",
    overflow: "visible",
    borderRadius: "50px",
    background: "#eaedf3",
    boxShadow: "inset 0 10px 10px rgba(244, 245, 250, 0.9)",
  },
  Progress: {
    borderRadius: "50px",
  },
  ProgressBar: {
    borderRadius: "50px",
  },
  progressValue: {
    position: "relative",
    left: "-45px",
    top: "4px",
    fontSize: "10.5px",
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: "2px",
  },
  //   progressBarActive: {
  //     animation: "reverse progress-bar-stripes 0.4s linear infinite
  //       animatePositive: "2s",
  //   },
  //   @-webkit-keyframes animate-positive {
  //     0% {
  //       width: 0%;
  //     }
  //   }
  //   @keyframes animate-positive {
  //     0% {
  //       width: 0%;
  //     }
  //   }

  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
  },
};
function Progress() {
  return (
    <div style={styles.container}>
      <div style={styles.progressOuter}>
        <div style={styles.progress}>
          <div
            style={styles.progressBar}
            class="progress-bar progress-bar-info progress-bar-striped active"
          ></div>
          <div class="progress-value">
            <div style={styles.center}>40</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Progress;
