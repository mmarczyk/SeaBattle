import React from "react";

const tileTypes = {
  0: "sea",
  1: "coast-west",
  2: "coast-east"
};

const shipTypes = {
  1: "corvette-a",
  2: "corvette-b"
};

const Tile = ({ type, even, ship, onClick, selected }) => {
  let className = "Tile " + even + " " + tileTypes[type];
  if (ship) {
    const shipClassName = "Ship " + shipTypes[ship];
    if (selected) {
      className += " selected";
    }
    return (
      <li className={className} onClick={onClick}>
        <div className={shipClassName} />
      </li>
    );
  }
  return <li className={className} />;
};

export default Tile;
