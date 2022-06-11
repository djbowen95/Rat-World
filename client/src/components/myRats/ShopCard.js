import React from "react";

function ShopCard({id, itemName, image, description, price }) {
  const styles = {
    card: {
      backgroundColor: "whitesmoke",
      width: "250px",
      textAlign: "center",
    },
    image: {
      width: "100%",
    },
  };

  return (
    <div style={styles.card}>
      <div>
        <h3>{itemName}</h3>
      </div>
      <div>
        <img style={styles.image} src={image} />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>Cost: {price}</p>
        <button data-id={id}>Buy</button>
      </div>
    </div>
  );
}

export default ShopCard;
