import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import buildBoard from "./reducers";

export default configureStore => {
  return createStore(
    buildBoard,
    { tiles: { width: 3, data: "111" } },
    applyMiddleware(thunkMiddleware)
  );
};
