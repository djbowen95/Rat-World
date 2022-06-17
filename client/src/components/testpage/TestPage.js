import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../utils/queries";
import { bumArray, headArray, bodyArray } from "../../images/ratParts"

const TestPage = () => {
  const { loading, data } = useQuery(QUERY_RATS);
  const rats = data?.rats || [];

  const styles = {
    container: {
      display: "flex",
    },
    head: {
      width: "45px",
    },
    body: {
      width: "60px",
    },
    bum: {
      width: "75px",
    },
    controller: {
      display: "flex",
      flexDirection: "column",
    },
  };

  function formatDate (date) {
    return new Date(date).toLocaleString();
};


  // Return rats[index] to return the rat name for the rat with that index.
  return (
    <div>
        <h1>Rat List</h1>
        {rats.map((rat) => (
            <div>
                <h2>{rat.name}</h2>
                <li>Image: <img src={bumArray[rat.bumIndex]} style={styles.bum} /><img src={bodyArray[rat.bodyIndex]} style={styles.body} /><img src={headArray[rat.headIndex]} style={styles.head} /> </li>
                <li>Created at: {rat.createdAt}</li>
                <li>Fed at: {rat.fedAt}</li>
                <li>Last fed: {rat.lastFed}</li>
            </div>
        ))}
      <h1>{rats.map((rat) => (<p>{rat.name}</p>))}
      </h1>
      <br />
    </div>
  );
};

export default TestPage;
