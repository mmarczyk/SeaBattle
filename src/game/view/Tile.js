import React from "react";

const Tile = ({ value, even }) => {
  const className = "Tile " + even;
  console.log(className);
  return (
    <li className={className}>
      <span>Tile {value}</span>
    </li>
  );
};

export default Tile;
