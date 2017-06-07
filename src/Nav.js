import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header-items">
          <div className="title-container">
            <Link to="/" className="header-text">
              <div>F L E E T R</div>
            </Link>
          </div>
          <div className="menu-container">
            <Link to="/" className="menu-item">
              <div>HOME</div>
            </Link>
            <Link to="/about" className="menu-item">
              <div >ABOUT</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
