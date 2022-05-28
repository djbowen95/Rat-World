import React from "react";
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <ul class="cards-container">
        {props.cards.map((card) => (
          <li className="card">
            {card.title}
            {card.image}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
