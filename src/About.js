import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h3>About Fleetr</h3>
        <p className="paragraph">
        Fleetr quickly generates fleet lists and assists with newer players who want to just get into a game
        without spending time building a fleet and making sure the points are even.
        </p>
        <h3>Code</h3>
        <p>
        This site is open-source and the code can be found <a href="https://github.com/a-tarr/fleetr">here</a>.
        </p>
        <h3>Contact</h3>
        <p>
        If you have any suggestions or feedback, drop me an email at <a href="mailto:bapplebo@gmail.com">bapplebo@gmail.com</a>!
        </p>
      </div>
    );
  }
}

export default About;
