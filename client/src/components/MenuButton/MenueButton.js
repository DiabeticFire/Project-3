import React from "react";

const thing = () => {
  console.log("I AM HERE");
};

const MenuButton = props => (
  <button className="menuButton" onClick={props.onclick}>
    {props.text}
  </button>
);

export default MenuButton;
