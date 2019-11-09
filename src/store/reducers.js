import { combineReducers } from "redux";
import { RECEIVE_BOARD, SHIP_SELECTED } from "./actions.js";

const buildBoard = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        tiles: action.tiles,
        fleet: action.fleet
      });
    default:
      return state;
  }
};

const selectShip = (state = [], action) => {
  switch (action.type) {
    case SHIP_SELECTED:
      return Object.assign({}, state, {
        selected: action.selected
      });
    default:
      return state;
  }
};

const app = combineReducers({
  buildBoard,
  selectShip
});

export default app;
