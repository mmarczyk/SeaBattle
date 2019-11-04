import React from "react";
import { connect } from "react-redux";
import Board from "./game/view/Board";

const App = ({ tiles }) => {
  return (
    <div className="App">
      <Board tiles={tiles} />
    </div>
  );
};

const transformLayout = (width, layout) => {
  let l = [];
  let row = [];
  for (let i = 0; i < layout.length; i++) {
    row.push(layout[i]);
    if (i % width === width - 1) {
      l.push(row);
      row = [];
    }
  }

  return l;
};

const mapStateToProps = state => {
  const { tiles } = state;

  return {
    tiles: {
      width: tiles.width,
      layout: transformLayout(tiles.width, tiles.layout)
    }
  };
};

export default connect(mapStateToProps)(App);
