import React from "react";
import Tile from "./Tile";

const RenderTile = ({
  key,
  row,
  col,
  type,
  even,
  fleet,
  onClick,
  selected
}) => {
  if (row in fleet && col in fleet[row]) {
    if (selected && selected.row === row && selected.col === col) {
      return (
        <Tile
          key={key}
          type={type}
          even={even}
          ship={fleet[row][col]}
          onClick={() => onClick(row, col)}
          selected="1"
        />
      );
    }
    return (
      <Tile
        key={key}
        type={type}
        even={even}
        ship={fleet[row][col]}
        onClick={() => onClick(row, col)}
      />
    );
  }
  return <Tile key={key} type={type} even={even} />;
};

const BoardView = ({ tiles, onTileClicked }) => {
  return (
    <div className="Board">
      {tiles.layout.map((rows, rowIdx) => (
        <ul className={rowIdx % 2 === 0 ? "even" : "odd"}>
          {rows.map((tile, colIdx) => (
            //if(rowIdx in tiles.fleet && colIdx in tiles.fleet[rowIdx]) {
            //  console.log("Ship: " + rowIdx + ", " + colIdx);
            //}
            /*<Tile
              key={rowIdx * tiles.width + colIdx}
              type={tile}
              even={rowIdx % 2 === 0 ? "even" : "odd"}
            />*/
            <RenderTile
              key={rowIdx * tiles.width + colIdx}
              row={rowIdx}
              col={colIdx}
              type={tile}
              even={rowIdx % 2 === 0 ? "even" : "odd"}
              fleet={tiles.fleet}
              onClick={onTileClicked}
              selected={tiles.selected}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default BoardView;
