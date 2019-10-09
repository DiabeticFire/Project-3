// import npm packages
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

// import data
import cards from "./data/cards";

// import utils
import playerClass from "../../utils/playerClass.js";

// import components
import Deck from "../../components/Deck/Deck.js";

// import misc
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
    let player1 = new playerClass(
      [
        cards.LordGeneralPozak,
        cards.HumanSoldier,
        cards.HumanSoldier,
        cards.HumanSoldier,
        cards.HumanSoldier,
        cards.HumanSoldier,
        cards.HumanSoldier
      ],
      "Joseph"
    );
    let player2 = new playerClass(
      [
        cards.LordOfLyn,
        cards.ElvenArcher,
        cards.ElvenArcher,
        cards.ElvenArcher,
        cards.ElvenArcher,
        cards.ElvenArcher,
        cards.ShortSword
      ],
      "Testing"
    );

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
  };

  render() {
    return (
      <div>
        {!isEmpty(this.state.player1) && (
          <Deck cards={this.state.player1.deck.length}></Deck>
        )}
      </div>
    );
  }
}

export default Battle;
