import React from "react";
import Tile from "./Tile";

const Board = ({ tiles }) => {
  return (
    <div>
      <ul>
        {tiles.layout.map((tile, idx) => (
          <Tile key={idx} value={tile} />
        ))}
      </ul>
    </div>
  );
};

export default Board;
