import React, { Component } from 'react';
import logo from './logo.svg';
import { Sets } from './data/sets';
import { List } from 'semantic-ui-react';

class SetList extends Component {
  constructor(props) {
    super(props);
  }

  listShipNames(fleet) {
    return Object.keys(fleet).map((ship) =>
      <List.Item>
        <List.Content floated="left" verticalAlign="middle">{ship}</List.Content>
        <List.Content floated="right" verticalAlign="middle">{fleet[ship]}x</List.Content>
      </List.Item>
    );
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {this.listShipNames(this.props.fleet)}
        </List>
      </div>
    );
  }
}

export default SetList;
