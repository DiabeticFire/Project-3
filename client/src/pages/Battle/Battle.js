// import npm packages
import React, { Component } from "react";
import { isEmpty } from "lodash";

// import data
import cards from "../../data/cards";

// import components
import Deck from "../../components/Deck/Deck.js";

// import css
import "./Battle.css";

const tempDeck1 = [
  cards.LordGeneralPozak,
  cards.HumanSoldier,
  cards.HumanSoldier,
  cards.HumanSoldier,
  cards.HumanSoldier,
  cards.HumanSoldier,
  cards.HumanSoldier
];

const tempDeck2 = [
  cards.LordOfLyn,
  cards.ElvenArcher,
  cards.ElvenArcher,
  cards.ElvenArcher,
  cards.ElvenArcher,
  cards.ElvenArcher,
  cards.ShortSword
];

const shuffle = array => {
  array.sort(() => Math.random() - 0.5);
};

class Battle extends Component {
  state = {
    player1: {
      deck: [],
      hand: [],
      battlefield: [],
      graveyard: []
    },
    player2: {
      deck: [],
      hand: [],
      battlefield: [],
      graveyard: []
    },
    activePlayer: 0,
    gameOver: false
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    // set players
    let player1 = { ...this.state.player1 };
    player1.deck = shuffle(tempDeck1);
    this.setState({ player1 });

    let player2 = { ...this.state.player2 };
    player2.deck = shuffle(tempDeck2);
    this.setState({ player2 });

    // pick who goes first
    this.setState({
      activePlayer: Math.floor(Math.random() * 2 + 1) ? "player1" : "player2"
    });
  };

  turn = () => {
    // draw
  };

  render() {
    return (
      <div>
        {!isEmpty(this.state.player1.deck) && (
          <Deck cards={this.state.player1.deck.length}></Deck>
        )}
      </div>
    );
  }
}

export default Battle;
