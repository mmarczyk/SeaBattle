import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configure";
import { fetchBoard } from "./store/actions";
import App from "./App";

const store = configureStore();
store.dispatch(fetchBoard());

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
