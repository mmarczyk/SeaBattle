import { connect } from "react-redux";
import BoardView from "../view/BoardView";
import { tileClicked } from "../../store/actions";

const mapStateToProps = state => {
  const { tiles, fleet } = state.buildBoard;
  const { selected } = state.selectShip;

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

export default Board;
