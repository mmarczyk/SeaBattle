import React from "react";
import Tile from "./Tile";

const Board = ({ tiles }) => {
  return (
    <div>
      {tiles.layout.map((rows, rowIdx) => (
        <ul>
          {rows.map((tile, colIdx) => (
            <Tile
              key={rowIdx * tiles.width + colIdx}
              value={tile}
              even={rowIdx % 2 === 0 ? "even" : "odd"}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Board;
