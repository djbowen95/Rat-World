import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS, QUERY_RATNAMES } from "../../utils/queries";
import JobsCard from "./JobsCard";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
};

function Jobs() {
  const { loading, data: jobData } = useQuery(QUERY_JOBS);
  const { data: ratNames } = useQuery(QUERY_RATNAMES);
  const jobList = jobData?.jobs || [];
  const nameList = ratNames?.rats || [];

  return (
    <div style={styles.container}>
      {jobList.map((job, index) => (
        <JobsCard
          key={index}
          id={job._id}
          jobName={job.jobName}
          image
          description={job.description}
          wages={job.wages}
          nameArray = {nameList} 
        />
      ))}
    </div>
  );
}

export default Jobs;