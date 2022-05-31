import React from "react";

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
  return (
    <div style={styles.title}>
      <div>
        <h1 className="title">Adopt A Rat!</h1>
      </div>

      <div className="container" style={styles.card}>
        <div className="card">
          <img
            style={styles.img}
            className="card-img-top"
            src="https://static.vecteezy.com/system/resources/previews/003/304/312/original/a-sticker-template-of-rat-cartoon-character-free-vector.jpg"
            alt="rat eating cheese"
          />
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
