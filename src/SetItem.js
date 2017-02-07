import React, { Component } from 'react';
import logo from './logo.svg';
import { Sets } from './data/sets';
import { List } from 'semantic-ui-react';
import Store from './data/Store';
import './styles/SetItem.css';
import './styles/RoundTimer.css';

class SetItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRound: 0
    }
  }

  increment() {
    this.setState({
      currentRound: this.state.currentRound + 1
    })
    Store.addShips(Sets.core);
  }

  decrement() {
    if (this.state.currentRound > 0) {
      this.setState({
        currentRound: this.state.currentRound - 1
      })
    }
  }

  render() {
    return (
      <div className="set-item">
        Core Set

        <div className="roundTimer">
          <div className="buttonContainer" onClick={() => this.decrement()}>
            <div className="arrow" >&lt;</div>
          </div>
          <span className="number">{this.state.currentRound}</span>
          <div className="buttonContainer" onClick={() => this.increment()}>
            <div className="arrow">&gt;</div>
          </div>
        </div>

      </div>
    );
  }
}

export default SetItem;
