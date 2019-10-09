// import react
import React, { Component } from "react";
import { Link } from "react-router-dom";

// dummy data
// import testDeck1 from "../../../public/testDeck1.json";
// import testDeck2 from "../../../public/testDeck2.json";

// import utils
import playerClass from "../../utils/playerClass.js";

// import components
import Player from "./Player.js";

class Battle extends Component {
  state = {
    player1: {},
    player2: {},
    activePlayer: 0,
    gameOver: false
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    // set players
    let player1 = new playerClass([], "Joseph");
    let player2 = new playerClass([], "Testing");

    // shuffle decks
    player1.shuffle();
    player2.shuffle();

    // pick who goes first
    //    the ploayer1 selects the state.player1 and sets it to the player1 variable
    this.setState(
      {
        activePlayer: Math.floor(Math.random() * 2) ? player1 : player2,
        player1,
        player2
      },
      // start game
      this.turn
    );
  };

  turn = () => {
    // draw
    if (this.state.activePlayer === 1) {
    }
  };

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default Battle;
