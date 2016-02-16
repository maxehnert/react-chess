import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


const reducers = combineReducers({
  pieces,
  position
});
export default rootReducer;

// just logging the state
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
