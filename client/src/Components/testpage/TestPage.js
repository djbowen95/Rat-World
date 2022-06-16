import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../utils/queries";
import { bumArray, headArray, bodyArray } from "../../images/ratParts"

const TestPage = () => {
  const { loading, data } = useQuery(QUERY_RATS);
  const rats = data?.rats || [];

  // Return rats[index] to return the rat name for the rat with that index.
  return (
    <div>
        <h1>Rat List</h1>
        {rats.map((rat) => (
            <div>
                <h2>{rat.name}</h2>
                <li>Image: <img src={bumArray[rat.bumIndex]} /> <img src={rat.bodyIndex} /> {rat.headIndex} </li>
                <li>Created at: {rat.createdAt}</li>
            </div>
        ))}
      <h1>{rats.map((rat) => (<p>{rat.name}</p>))}
      </h1>
      <br />
    </div>
  );
};

export default TestPage;
