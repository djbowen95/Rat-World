import React from "react";
import RatCards from "../ratCards/RatCards";
import rat1 from '../../images/rats/rat1.jpg'
import rat2 from '../../images/rats/rat2.jpg'

const ChooseARat = () => {
  const cards = [
    {
      title: <h3>Rattata</h3>,
      image: <img style={{width:'200px'}} src={rat1} alt="RAT 1" />,
    },
    {
      title: <h3>Raticate</h3>,
      image: <img style={{width:'200px'}} src={rat2} alt="RAT 2" />,
    },
  ];

  return (
    <div>
      <RatCards cards = {cards} />
    </div>
  );
};

export default ChooseARat;
