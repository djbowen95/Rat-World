import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USERS_RATS } from "../../../utils/queries";
import Auth from "../../../utils/Auth";
import RatCard from "./ratCards";
import styles from "./ratStyles";

function ViewMyRats(props) {

  const userId = Auth.getProfile().data._id

  const { loading, data } = useQuery(QUERY_USERS_RATS, {
    variables: {id: userId}
  });
  const rats = data?.user.rats || [];

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
