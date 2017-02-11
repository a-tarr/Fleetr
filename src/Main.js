import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import App from './App';
import About from './About';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={() =><App store={this.props.store}/>} />
          <Route path="/about" component={() => <About />} />
        </div>
      </Router>
    );
  }
};
