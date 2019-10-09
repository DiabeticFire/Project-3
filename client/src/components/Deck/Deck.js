import React from "react";

const Deck = props => (
  <div class="deck">
    <img src={props.cards ? "./images/Green.png" : "./images/Red.png"}></img>
  </div>
);

export default Deck;
