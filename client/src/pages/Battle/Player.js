import React, { Component } from "react";

class Player extends Component {
  state = {
    deck: [],
    hand: [],
    battlefield: [],
    graveyard: [],
    name: ""
  };

  shuffle = () => {
    this.setState({ deck: this.state.deck.sort(() => Math.random() - 0.5) });
  };
}

export default Player;
