import React from "react";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    marginRight: "180px",
  },
  jobCard: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "20px",
  },
};

function JobsCard({ id, jobName, image, description, wages }) {
  return (
    <div style={styles.container}>
      <section className="jobs-card" style={styles.jobCard}>
        <div>
          <h1>{jobName}</h1>
        </div>
        <div>
          <img
            src={image}
            alt=""
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
