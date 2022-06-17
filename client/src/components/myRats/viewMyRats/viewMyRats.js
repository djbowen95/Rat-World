import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../../utils/queries";

import RatCard from "./ratCards";
import styles from "./ratStyles";

function ViewMyRats(props) {

  const { loading, data } = useQuery(QUERY_RATS);
  const rats = data?.rats || [];

  return (
    <div style={styles.all}>
    <header class="header" style={styles.heading}>
      <h1 class="title">My Rats</h1>
      <button class="adopt-btn" data-page="createRat" onClick={props.sideMenuSelection}>+ Adopt a Rat</button>
    </header>

    <ul style={styles.cardWrapper}>
      {rats.map((rat) => (<RatCard rat={rat}/>))}
      </ul>
    </div>
  );
};

export default ViewMyRats;
