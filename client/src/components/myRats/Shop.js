import React from "react";
import ShopCard from "./ShopCard";
import { useQuery } from "@apollo/client";
import { QUERY_SHOP, QUERY_MONEY } from "../../utils/queries";
import foodCheese from "../../images/items/swiss-cheese.png";
import Auth from "../../utils/Auth";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
};

function Shop() {
  // Get shop items from DB:
  const { loading, data: shopData } = useQuery(QUERY_SHOP);
  const itemList = shopData?.shopItems || [];
  // Get id of logged in user:
  const userId = Auth.getProfile().data._id;
  // Get the amount of money the user has:
  const { data: moneyData } = useQuery(QUERY_MONEY, {
    variables: { id: userId },
  });
  const money = moneyData?.user.money || "";

  return (
    <div>
      <div>Money: {money}</div>
      <div style={styles.container}>
        {itemList.map((item, index) => (
          <ShopCard
            key={index}
            id={item._id}
            itemName={item.itemName}
            image={foodCheese} //this needs to change
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
