import React from "react";
import RatCards from "../ratCards/RatCards";

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
      <RatCards cards = {cards} />
    </div>
  );
};

export default ChooseARat;
