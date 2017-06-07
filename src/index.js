import React from 'react';
import ReactDOM from 'react-dom';
import Store from './data/Store';
import Main from './Main';
import './index.css';

const store = new Store();

ReactDOM.render(
  <Main store={store} />, document.getElementById('root')
);
