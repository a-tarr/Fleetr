import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Store from './data/Store';
import './index.css';

const store = new Store();

ReactDOM.render(
  <Main store={store} />, document.getElementById('root')
);
