import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './data/Store';
import './index.css';

const store = new Store();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
