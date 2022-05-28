import React from "react";
import Cards from "../cards/Cards";

const ChooseARat = () => {
  const cards = [
    {
      title: <h3>Rattata</h3>,
      image: <img src="" alt="RAT 1" />,
    },
    {
      title: <h3>Raticate</h3>,
      image: <img src="" alt="RAT 2" />,
    },
  ];

  return (
    <div>
      <Cards cards = {cards} />
    </div>
  );
};

export default ChooseARat;
