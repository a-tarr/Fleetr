import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Nav from './Nav';
import App from './App';
import About from './About';

ReactGA.initialize('UA-91813265-1');
ReactGA.pageview(window.location.pathname);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export default class Main extends Component {
  render() {
    return (
      <Router onUpdate={logPageView} >
        <div>
          <Nav />
          <Route exact path="/" component={() =><App store={this.props.store}/>} />
          <Route path="/about" component={() => <About />} />
        </div>
      </Router>
    );
  }
};
