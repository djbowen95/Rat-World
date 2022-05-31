import React from "react";
import RatDesigner from './RatDesigner'

const styles = {
  title: {
    textAlign: "center",
  },
  card: {
    textAlign: "center",
    marginTop: "100px",
  },
  img: {
    width: "20%",
  },
  cardTitle: {
    fontSize: "25px",
  },
  input: {
    width: "200px",
    padding: "5px",
    borderRadius: "5px",
  },
  btn: {
    padding: "5px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

const Rat = () => {
  // useEffect (can be last step) (if want it to appear on the page/reload)
  // Create a useState hook - with a variable (myRat, setMyRat)
  // Handle input change - track the user input, use set myRat useState to feed the variable
  // Connect handle input change with an onChange to the right input
  // Handle submit (onClick / button) - commit the info of myRat through the useMutation to the backend

  return (
    <div style={styles.title}>
      <div>
        <h1 className="title">Adopt A Rat!</h1>
      </div>

      <div className="container" style={styles.card}>
        <div className="card">
          <RatDesigner/>
          <div className="card-body">
            <h5 className="card-title" style={styles.cardTitle}>
              Rattata
            </h5>
          </div>
          <div>
            <input
              style={styles.input}
              type="text"
              className="input"
              placeholder="Name Your Rat!"
            ></input>
            <button className="btn" style={styles.btn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rat;
