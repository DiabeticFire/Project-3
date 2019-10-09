class PlayerClass {
  constructor(deck, name) {
    this.deck = deck;
    this.name = name;
  }

  shuffle = () => {
    this.deck = this.deck.sort(() => Math.random() - 0.5);
  };
}

export default PlayerClass;
