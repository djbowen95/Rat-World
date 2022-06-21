import React from "react";
import $ from "jquery";
import { useMutation } from "@apollo/client";
import { JOB_APPLICATION } from "../../utils/mutations";
import { useState } from "react";
import { borderRadius, fontWeight } from "@mui/system";

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
  },
  image: {
    width: "100%",
  },
  innerCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  select: {
    padding: "10px",
    backgroundColor: "rgb(228 212 247)",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px black inset",
    fontWeight: "bold",
  }
};

function JobsCard({ id, jobName, image, description, wages, nameArray }) {
  
  const [jobApplication, { error }] = useMutation(JOB_APPLICATION);

  const [applyingFor, setApplyingFor] = useState();

  async function applyJobHandler(e) {
    const ratId = applyingFor;
    const jobId = e.target.dataset.id;
    try {
      const { data } = await jobApplication({
        variables: { ratId: ratId, jobId: jobId },
      });
    } catch (err) {
      console.log(err);
    }
  }

  function getIdForJobApplication(e) {
    setApplyingFor(e.target.value);
  }

  return (
    <div style={styles.card}>
      <div className="jobs-card" style={styles.innerCard}>
        <div>
          <h1>{jobName}</h1>
        </div>
        <div>
          <h3>Job Description</h3>
          <p>{description}</p>
          <p>Salary: £{wages}</p>
        </div>
        <div>
          <select style={styles.select} onChange={getIdForJobApplication}>
            <option>Select a rat...</option>
            {nameArray.map((rat, index) => (
              <option key={index} value={rat._id} label={rat.name}></option>
            ))}
          </select>
          <button data-id={id} onClick={applyJobHandler}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;
