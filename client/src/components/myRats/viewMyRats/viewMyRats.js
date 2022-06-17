import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_RATS } from "../../../utils/queries";

import RatCard from "./ratCards";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function AllRats() {
  const styles = {
    heading: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    adoptRat: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  };

  const { loading, data } = useQuery(QUERY_RATS);
  const rats = data?.rats || [];
  
  return (
    <div className="innerBox">
      <div style={styles.heading}>
        <h2>My Rats</h2>
        <div style={styles.adoptRat}>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            Adopt a Rat
            <AddIcon />
          </Fab>
        </div>
      </div>
      <RatCard />
      <RatCard />
      <RatCard />
    </div>
  );
}

export default AllRats;
