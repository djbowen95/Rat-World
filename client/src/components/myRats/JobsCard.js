import React from "react";

const styles = {
  card: {
    backgroundColor: "whitesmoke",
    width: "250px",
    textAlign: "center",
    margin: "5px",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  image: {
    width: "100%",
  },
};

function JobsCard({ id, jobName, image, description, wages }) {
  return (
    <div style={styles.card}>
      <section className="jobs-card" style={styles.jobCard}>
        <div>
          <h1>{jobName}</h1>
        </div>
        <div>
          <img
            src={image}
            alt="rat with laptop"
          />
        </div>
        <div>
          <h3>Job Description</h3>
          <p>{description}</p>
          <p>{wages}</p>
        </div>
      </section>
    </div>
  );
}

export default JobsCard;
