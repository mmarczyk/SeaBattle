export const REQUEST_BOARD = "REQUEST_BOARD";
export const RECEIVE_BOARD = "RECEIVE_BOARD";

export function requestBoard() {
  return {
    type: REQUEST_BOARD
  };
}

export function receiveBoard() {
  return {
    type: RECEIVE_BOARD,
    tiles: { width: 5, layout: "11111411111215111111" }
  };
}

export function fetchBoard() {
  return dispatch => {
    dispatch(requestBoard());
    return dispatch(receiveBoard());
  };
}
