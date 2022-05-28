import React from "react";
import ChooseARat from "./ChooseARat";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function MyRats() {

  const styles = {
      section: {
          display: 'flex'
      },
      aside: {
          width: '20%'
      },
      container: {
        width: '80%',
        backgroundColor: 'grey'
      },
      heading: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
      },
      adoptRat: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
  }

  return (
    <section style={styles.section}>
      <aside style={styles.aside}>
          <h2>User Name</h2>
          <ul>
              <li>My Rats</li>
              <li>Shop</li>
              <li>Cemetery</li>
          </ul>
      </aside>  
      <div style={styles.container}>
        <div style={styles.heading}>
            <h2>My Rats</h2>
            <div style={styles.adoptRat}>
                <Fab variant="extended" size="medium" color="primary" aria-label="add">
                    Adopt a Rat
                    <AddIcon />
                </Fab>
            </div>
        </div>
        <ChooseARat />
      </div>
    </section>
  );
}

export default MyRats;
