import React from "react";
import $ from "jquery"
import { useMutation } from "@apollo/client"; 
import { JOB_APPLICATION } from "../../utils/mutations";
import { useState } from "react";

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
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
  },
};

function JobsCard({ id, jobName, image, description, wages, nameArray }) {

  const [jobApplication, {error}] = useMutation(JOB_APPLICATION)

  const [applyingFor, setApplyingFor] = useState()

  async function applyJobHandler(e){
    const ratId = applyingFor
    const jobId = e.target.dataset.id
    try {
      const {data} = await jobApplication({
        variables: { ratId:ratId, jobId:jobId }
      })
    } catch(err){console.log(err)}
  }

  function getIdForJobApplication(e){
    setApplyingFor(e.target.value)
  }

  return (
    <div style={styles.card}>
      <section className="jobs-card" style={styles.jobCard}>
        <div>
          <h1>{jobName}</h1>
        </div>
        <div>
          <img src={image} alt="rat with laptop" />
        </div>
        <div>
          <h3>Job Description</h3>
          <p>{description}</p>
          <p>{wages}</p>
        </div>
        <select onChange={getIdForJobApplication}>
        {nameArray.map((rat, index) => (
          <option key={index} value={rat._id} label={rat.name}></option>
      ))}
        </select>
        <button data-id={id} onClick={applyJobHandler}>Apply</button>
      </section>
    </div>
  );
}

export default JobsCard;
