import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';


import { createStore } from 'redux';
import rootReducer from './Reducers/index';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Board />
  </Provider>,
  rootEl
)
