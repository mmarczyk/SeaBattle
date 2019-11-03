import { RECEIVE_BOARD } from "./actions.js";

function buildBoard(state = [], action) {
  switch (action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        tiles: action.tiles
      });
    default:
      return state;
  }
}

export default buildBoard;
