import React from "react";
import "./Deck.css";

const Deck = props => (
  <div className="deck">
    <img
      src={props.cards > 0 ? "./images/Green.png" : "./images/Red.png"}
      alt="deck"
    ></img>
  </div>
);

export default Deck;
