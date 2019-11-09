import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import app from "./reducers";

export default configureStore => {
  return createStore(
    app,
    { buildBoard: { tiles: { width: 3, data: "111" } } },
    applyMiddleware(thunkMiddleware)
  );
};
