import React from "react";
const styles = {
  progresBar: {
    backgroundColor: "grey",
    borderRadius: "13px",
    padding: "3px",
  },

  progressBar: {
    height: "20px",
    backgroundColor: "#573b8a",
    borderRadius: "10px",
    width: "40%",
  },
};
function Progress() {
  return (
    //progress bar
    <div style={styles.progresBar}>
      <div style={styles.progressBar}>
        <div></div>
      </div>
    </div>
  );
}
export default Progress;
