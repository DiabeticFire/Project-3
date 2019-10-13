import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <p id="name">{props.card.name}</p>
    <img id="art" src={props.card.src} alt="art" />
    <img
      className="icon"
      id="health"
      src="/images/icons/Health.png"
      alt="Health"
    />
    <img
      className="icon"
      id="power"
      src="/images/icons/Power.png"
      alt="power"
    />
    <img
      className="icon"
      id="ready"
      src="/images/icons/Ready.png"
      alt="ready"
    />
    <img
      className="icon"
      id="units"
      src="/images/icons/Units.png"
      alt="units"
    />
    <img
      className="icon"
      id="equipment"
      src="/images/icons/Equipment.png"
      alt="equipment"
    />
    <img
      className="icon"
      id="spells"
      src="/images/icons/Spells.png"
      alt="spells"
    />
  </div>
);

export default Card;
