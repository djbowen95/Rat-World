import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../../utils/queries";

import RatCard from "./ratCards";

function ViewMyRats() {
  const styles = {
    heading: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },

  };

  const { loading, data } = useQuery(QUERY_RATS);
  const rats = data?.rats || [];

  return (
    <div>
    <header class="header">
      <h1 class="title">My Rats</h1>
      <button class="adopt-btn">+ Adopt a rat</button>
    </header>

    <ul class="card-wrapper">
      <div>{rats.map((rat) => (<RatCard rat={rat}/>))}</div>
      </ul>
    </div>
  );
};

export default ViewMyRats;
