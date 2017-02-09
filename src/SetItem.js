import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Sets } from './data/sets';
import { Button, Icon } from 'semantic-ui-react';
import './styles/SetItem.css';

@observer
class SetItem extends Component {
  @observable count = 0;

  constructor(props) {
    super(props);
    this.state = {
      decrementVisible: false,
      incrementVisible: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.updater !== nextProps.updater) {
      this.count = 0;
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1
    }
    this.props.store.removeShips(Sets[this.props.set]);
  }

  increment() {
    this.count += 1
    this.props.store.addShips(Sets[this.props.set]);
  }

  render() {
    let decrement = null;
    if (this.count > 0) {
      decrement = <Button className="button-override" size="mini" icon compact onClick={() => this.decrement()}>
        <Icon name='chevron left' />
      </Button>
    }

    return (
      <div className="set-item">
        {this.props.name}
        <div className="roundTimer">
          {decrement}
          <span className="number">{this.count}</span>
          <Button className="button-override" size="mini" icon compact onClick={() => this.increment()}>
            <Icon name='chevron right' />
          </Button>
        </div>

      </div>
    );
  }
}

export default SetItem;
