import React from "react";
import Tile from "./Tile";

const isSelected = (position, target) => {
  const { rowIdx, colIdx } = position;

  return (
    target && target.row === rowIdx && target.col === colIdx && target.type
  );
};

const hasShip = (position, fleet) => {
  const { rowIdx, colIdx } = position;

  return rowIdx in fleet && colIdx in fleet[rowIdx] && fleet[rowIdx][colIdx];
};

const BoardView = ({ tiles, onTileClicked }) => {
  return (
    <div className="Board">
      {tiles.layout.map((rows, rowIdx) => (
        <ul className={rowIdx % 2 === 0 ? "even" : "odd"}>
          {rows.map((tile, colIdx) => (
            <Tile
              key={rowIdx * tiles.width + colIdx}
              type={tile}
              even={rowIdx % 2 === 0 ? "even" : "odd"}
              ship={hasShip({ rowIdx, colIdx }, tiles.fleet)}
              onClick={() => onTileClicked(rowIdx, colIdx)}
              selected={isSelected({ rowIdx, colIdx }, tiles.selected)}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default BoardView;
