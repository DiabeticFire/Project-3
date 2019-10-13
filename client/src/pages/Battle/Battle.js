// import npm packages
import React, { Component } from "react";
import { isEmpty } from "lodash";

// import data
import cards from "../../data/cards.js";

// import components
import Deck from "../../components/Deck/Deck.js";
import Card from "../../components/Card/Card.js";

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

const shuffle = array => array.sort(() => Math.random() - 0.5);

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
    activePlayer: "",
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
    this.setState(
      {
        activePlayer:
          Math.floor(Math.random() * 2 + 1) === 1 ? "player1" : "player2"
      },
      () => {
        this.turn(this.state.activePlayer);
      }
    );
  };

  turn = activePlayer => {
    // ensure data is loaded
    if (typeof activePlayer !== "string") this.turn(activePlayer);

    // draw
    let player = { ...this.state[activePlayer] };
    player.hand.push(player.deck.pop());
    this.setState({ player });

    // ready
    player = { ...this.state[activePlayer] };
    player.hand.forEach(card => {
      card.ready -= 1;
      if (card.ready === 0) {
        player.battlefield.push(
          player.hand.splice(player.hand.indexOf(card), 1)
        );
      }
    });

    // battle
    player = { ...this.state[activePlayer] };
    player.battlefield.forEach(card => {
      // attack
      // abilities
    });
  };

  render() {
    return (
      <div>
        {!isEmpty(this.state.player1.deck) && (
          <Deck cards={this.state.player1.deck.length}></Deck>
        )}
        {!isEmpty(this.state.player1.deck) && (
          <Card card={this.state.player1.deck[0]} />
        )}
      </div>
    );
  }
}

export default Battle;
