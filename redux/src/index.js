import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import userReducer from "./components/userReducer";
import productReducer from "./components/productReducer";
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer
});
const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Samsung",
        type: "monitor"
      }
    ],
    user: "Emre"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserAction = {
  type: "userUpdate",
  payload: {
    user: "mehmet"
  }
};
store.dispatch(updateUserAction);
console.log(store.getState());

/*
console.log(store.getState());
const action = {
    type: 'changeState',
    payload: {
        newState: 'my new state'
    }
};
const action2 = {
    type: 'changeState',
    payload: {
        newState: 'my new state2'
    }
};
store.subscribe(() => {
   console.log('Store updated', store.getState())
});
store.dispatch(action);
store.dispatch(action2);
console.log(store.getState());
*/

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));

serviceWorker.unregister();
