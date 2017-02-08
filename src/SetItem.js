import React, { Component } from 'react';
import { Sets } from './data/sets';
import { List, Button, Icon } from 'semantic-ui-react';
import Store from './data/Store';
import './styles/SetItem.css';

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
    this.props.store.addShips(Sets.core);
  }

  decrement() {
    if (this.state.currentRound > 0) {
      this.setState({
        currentRound: this.state.currentRound - 1
      })
    }
    this.props.store.removeShips(Sets.core);
  }

  render() {
    return (
      <div className="set-item">
        Core Set
        <div className="roundTimer">
          <Button className="button-override" size="mini" icon compact onClick={() => this.decrement()}>
            <Icon name='chevron left' />
          </Button>
          <span className="number">{this.state.currentRound}</span>
          <Button className="button-override" size="mini" icon compact onClick={() => this.increment()}>
            <Icon name='chevron right' />
          </Button>
        </div>

      </div>
    );
  }
}

export default SetItem;
