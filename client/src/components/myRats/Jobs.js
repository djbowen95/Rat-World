import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS, QUERY_RATNAMES, QUERY_USERS_RATS } from "../../utils/queries";
import JobsCard from "./JobsCard";
import Auth from "../../utils/Auth";



const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
};

function Jobs() {
  const userId = Auth.getProfile().data._id
  const { loading, data: jobData } = useQuery(QUERY_JOBS);
  const { data: ratNames } = useQuery(QUERY_USERS_RATS, {
    variables: {id: userId}
  });
  const jobList = jobData?.jobs || [];
  const nameList = ratNames?.user.rats || [];

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
