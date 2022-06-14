import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../../utils/queries";
import JobsCard from "./JobsCard";

function Jobs() {
  const { loading, data } = useQuery(QUERY_JOBS);
  const jobList = data?.jobs || [];
 
  

  return (
    <div>
      {jobList.map((job, index) => (
        <JobsCard
          key={index}
          id={job._id}
          jobName={job.jobName}
          image={job.image}
          description={job.description}
          wages={job.wages}
        />
      ))}
    </div>
  );
}

export default Jobs;