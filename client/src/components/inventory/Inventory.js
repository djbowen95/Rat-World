import { useQuery } from "@apollo/client";
import React from "react";
import Auth from "../../utils/Auth";
import { QUERY_INVENTORY, QUERY_ITEM } from "../../utils/queries";
import Draggable from "react-draggable";
import foodCheese from "../../images/items/swiss-cheese.png";
import foodMeat from "../../images/items/meat.png"
import foodChoc from "../../images/items/chocolate.png"


const styles = {
  draggableContainer: {
    position: "fixed",
  },
  draggable: {
    cursor: "grab",
    backgroundColor: "black",
    padding: "3px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px 10px 0px 0px",
    opacity: "0.9",
  },
  closeInv: {
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
    width: "initial"
  },
  inventoryContainer: {
    padding: "10px",
    backgroundColor: "#3c1c1c",
    opacity: "0.9",
    display: "flex",
    flexWrap: "wrap",
    width: "312px",
    height: "312px",
    border: "5px solid black",
    borderRadius: "0px 0px 10px 10px",
  },
  item: {
    margin: "1%",
    backgroundColor: "whitesmoke",
    width: "31.33%",
    height: "31.33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "inset 0px 0px 3px 3px black",
  },
  img: {
      width: "50px"
  },
};

function Inventory({ inventoryToggle }) {
  const { data: inventoryData } = useQuery(QUERY_INVENTORY, {
    variables: { id: Auth.getProfile().data._id },
  });

  const inventory = inventoryData?.user.inventory;

  function getImage(imageData){
    switch(imageData){
      case "cheese":
        return foodCheese;
      case "meat":
        return foodMeat;
      case "chocolate":
        return foodChoc;
    }
  }

  return (
    <Draggable handle=".handle">
      <div style={styles.draggableContainer}>
        <div style={styles.draggable} className="handle">
          <span>Inventory</span>
          <button onClick={inventoryToggle} style={styles.closeInv}>
            x
          </button>
        </div>
        <div style={styles.inventoryContainer}>
          {inventory?.map((item, index) => (
            <div style={styles.item} key={index}>
              <div>{item.itemName}</div>
              <div title={item.description}><img style={styles.img} src={getImage(item.image)}/></div>
            </div>
          ))}
        </div>
      </div>
    </Draggable>
  );
}

export default Inventory;
