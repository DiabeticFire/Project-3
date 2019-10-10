// import npm packages
import React, { Component } from "react";

// import components
import MenuButton from "../../components/MenuButton/MenueButton.js";
import Title from "../../components/Title/Title.js";

// import css
import "./Home.css";

class Home extends Component {
  state = {};

  thing = () => console.log("THING!!!");

  render() {
    return (
      <div className="grid">
        <Title />
        <MenuButton text="Play" onClick={this.thing} />
        <MenuButton text="Deckbuilder" onClick={this.thing} />
        <MenuButton text="Collection" onClick={this.thing} />
        <MenuButton text="Campaign" onClick={this.thing} />
      </div>
    );
  }
}

export default Home;
