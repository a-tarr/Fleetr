import React, { Component } from 'react';
import logo from './logo.svg';
import { Card, List } from 'semantic-ui-react';
import './styles/ShipList.css';

class ShipList extends Component {
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

  setColour() {
    return this.props.faction.toLowerCase() === "empire" ? "blue" : "red"
  }

  render() {
    return (
      <Card color={this.setColour()}>
        <Card.Content>
          <Card.Header>{this.props.faction}</Card.Header>
          <List divided relaxed>
            {this.listShipNames(this.props.fleet)}
          </List>
        </Card.Content>
      </Card>
    );
  }
}

export default ShipList;
