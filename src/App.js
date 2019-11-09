import React from "react";
import { connect } from "react-redux";
import BoardView from "./game/view/Board";
import { tileClicked } from "./store/actions";

const App = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

const mapStateToProps = state => {
  const { tiles, fleet } = state.buildBoard;
  const { selected } = state.selectShip;

  //console.log(state);

  return {
    tiles: {
      width: tiles.width,
      layout: tiles.layout,
      fleet: fleet,
      selected: selected
    }
  };
};

const mapDispathToProps = dispatch => ({
  onTileClicked: (row, col) => dispatch(tileClicked(row, col))
});

const Board = connect(
  mapStateToProps,
  mapDispathToProps
)(BoardView);

export default connect(mapStateToProps)(App);
