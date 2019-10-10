// import npm packages
import React, { Component } from "react";

// import components
import MenuButton from "../../components/MenuButton/MenueButton.js";
import Title from "../../components/Title/Title.js";

// import css
import "./Home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="grid">
        <Title />
        <MenuButton text="Play" />
        <MenuButton text="Deckbuilder" />
        <MenuButton text="Collection" />
        <MenuButton text="Campaign" />
      </div>
    );
  }
}

export default Home;
