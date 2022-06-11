import React from "react";
import ratimage from "../progress/rat.png";
const styles = {
  //   barOutline: {
  //     backgroundColor: "grey",
  //     borderRadius: "13px",
  //     padding: "3px",
  //   },

  //   progressBar: {
  //     height: "20px",
  //     backgroundColor: "#573b8a",
  //     borderRadius: "10px",
  //     width: "40%",
  //   },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  },

  //   .card:hover {
  //     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  //   },

  container: {
    padding: "2px 16px",
  },

  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    height: "30rem",
    width: "40rem",
    align: "center",
  },

  img: {
    borderRadius: "5px 5px 0 0",
  },

  baroutline: {
    backgroundColor: "grey",
    borderRadius: "13px",
    padding: "3px",
    lineHeight: "30%",
  },

  h2: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  h3: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },

  progressbar: {
    backgroundColor: "purple",
    width: "30%",
    height: "10px",
    borderRadius: "10px",
  },
};
function Progress() {
  return (
    // //progress bar
    // <div style={styles.barOutline}>
    //   <div style={styles.progressBar}>
    //     <div></div>
    //   </div>
    // </div>

    <div style={styles.center}>
      <div style={styles.card}>
        <h2 style={styles.h2}>
          <b>Feed Rat</b>
        </h2>
        <img src={ratimage} style={styles.center} />
        <div style={styles.container}>
          <h3 style={styles.h3}>Hunger level</h3>
          <div style={styles.baroutline}>
            <div style={styles.progressbar}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Progress;
