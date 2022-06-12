import { useQuery } from "@apollo/client";
import React from "react";
import Auth from "../../utils/Auth";
import { QUERY_INVENTORY, QUERY_ITEM } from "../../utils/queries";
import Draggable from "react-draggable";

const styles = {
  inventoryContainer: {
    position: "fixed",
    backgroundColor: "grey",
    opacity: "0.8",
    display: "flex"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
};

function Inventory() {
  const { data: inventoryData } = useQuery(QUERY_INVENTORY, {
    variables: { id: Auth.getProfile().data._id },
  });

  const inventory = inventoryData?.user.inventory;

  return (
    <Draggable handle=".handle">
      <div style={styles.inventoryContainer}>
        <div className="handle">Drag Here</div>
        {inventory?.map((item, index) => (
          <div style={styles.item} key={index}>
            <div>{item.itemName}</div>
            <div>{item.image}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </Draggable>
  );
}

export default Inventory;
