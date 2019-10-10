import React from "react";

const Deck = props => (
  <div className="deck">
    <img
      src={props.cards > 0 ? "./images/Green.png" : "./images/Red.png"}
    ></img>
  </div>
);

export default Deck;
