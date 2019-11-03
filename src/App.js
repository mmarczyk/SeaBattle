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

const mapStateToProps = state => {
  const { tiles } = state;

  return {
    tiles: {
      width: tiles.width,
      layout: tiles.layout.split("")
    }
  };
};

export default connect(mapStateToProps)(App);
