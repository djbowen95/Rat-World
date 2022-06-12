import React, { useState } from "react";
import AllRats from "./AllRats";
import Shop from "./Shop";
import Jobs from "./Jobs";
import Cemetery from "./Cemetery";
import MyFriends from "./MyFriends";
import Auth from '../../utils/Auth';
import Inventory from "../inventory/Inventory";

function MyRats() {
  const styles = {
    section: {
      display: "flex",
    },
    aside: {
      width: "20%",
    },
    mainArea: {
      width: "80%"
    }
  };
  const username = Auth.getProfile().data.name
  const [sideMenuChoice, setMenuChoice] = useState("allRats");
  const [showInventory, setShowInventory] = useState(false)

  function renderMenuChoice() {
    switch (sideMenuChoice) {
      case 'allRats':
        return <AllRats/>;
      case 'shop':
        return <Shop/>;
      case 'jobs':
        return <Jobs/>;
      case 'cemetery':
        return <Cemetery/>
        case 'myFriends':
          return <MyFriends/>
    }
  }

  function sideMenuSelection(e) {
    setMenuChoice(e.target.dataset.page);
  }

  function inventoryToggle(e){
    console.log("hello")
    if (showInventory) {
      setShowInventory(false)
      e.target.innerText = "View Inventory"
    }
    else {
      setShowInventory(true)
      e.target.innerText = "Hide Inventory"
    }
  }

  function inventoryView(){
    if (!showInventory) {
      return
    }
    else {return <Inventory/>}
  }

  return (
    <section style={styles.section}>
      <aside style={styles.aside}>
        <div>
          <h2>{username}</h2>
          <button onClick={inventoryToggle}>View Inventory</button>
        </div>
        <ul>

          <li data-page="allRats" onClick={sideMenuSelection}>
            <button data-page="allRats">My Rats</button>
          </li>
          <li data-page="shop" onClick={sideMenuSelection}>
            <button data-page="shop">Shop</button>
          </li>
          <li data-page="jobs" onClick={sideMenuSelection}>
            <button data-page="jobs">Jobs</button>
          </li>
          <li data-page='cemetery' onClick={sideMenuSelection}><button data-page='cemetery'>Cemetery</button></li>
          <li data-page='myFriends' onClick={sideMenuSelection}><button data-page='myFriends'>My Friends</button></li>
        </ul>
      </aside>
      <div style={styles.mainArea}>
        {renderMenuChoice()}
      </div>
      {inventoryView()}
    </section>
  );
}

export default MyRats;
