import React from "react";
import ShopCard from "./ShopCard";
import { useQuery } from "@apollo/client";
import { QUERY_SHOP } from "../../utils/queries";
import foodCheese from "../../images/items/swiss-cheese.png";

const styles = {
  container: {
      display: 'flex',
      justifyContent: 'space-around'
  }
}

function Shop() {
  const { loading, data } = useQuery(QUERY_SHOP);
  const itemList = data?.shopItems || [];
  

  return (
    <div style={styles.container}>
      {itemList.map((item, index) => (
        <ShopCard
          key={index}
          id={item._id}
          itemName={item.itemName}
          image={foodCheese}//this needs to change
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Shop;
