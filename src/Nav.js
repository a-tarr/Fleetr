import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="header-items">
          <Link to="/" className="header-text">
            <div>F L E E T R</div>
          </Link>
          <div className="white-space" />
          <Link to="/" className="menu-item">
            <div>HOME</div>
          </Link>
          <Link to="/about" className="menu-item">
            <div >ABOUT</div>
          </Link>
          <Link to="/contact" className="menu-item end">
            <div>CONTACT</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
