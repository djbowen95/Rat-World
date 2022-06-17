import React from "react";
import ChooseARat from "./ChooseARat";
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
      <ChooseARat />
    </div>
  );
}

export default AllRats;
