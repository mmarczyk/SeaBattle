export const REQUEST_BOARD = "REQUEST_BOARD";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const SHIP_SELECTED = "SHIP_SELECTED";

const transformLayout = (width, layout) => {
  let l = [];
  let row = [];
  let last = width - 1;
  for (let i = 0; i < layout.length; i++) {
    row.push(layout[i]);
    if (i % width === last) {
      l.push(row);
      row = [];
      if (Math.trunc(i / width) % 2 === 0) {
        last = last - 1;
        if (last < 0) {
          last = width - 1;
        }
      }
    }
  }

  return l;
};

export function requestBoard() {
  return {
    type: REQUEST_BOARD
  };
}

export function receiveBoard() {
  const fleet = {
    0: { 1: 1, 5: 2 },
    1: { 1: 1, 4: 2 }
  };
  const layout = {
    width: 6,
    layout: [
      [1, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 2]
    ]
  };
  return {
    type: RECEIVE_BOARD,
    tiles: layout,
    fleet: fleet
  };
}

export function fetchBoard() {
  return dispatch => {
    dispatch(requestBoard());
    return dispatch(receiveBoard());
  };
}

const tileClicked = (row, col) => {
  return {
    type: SHIP_SELECTED,
    selected: {
      row: row,
      col: col,
      type: 0
    }
  };
};

export { tileClicked };
