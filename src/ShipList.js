import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';

class ShipList extends Component {
  listShipNames(fleet) {
    return Object.keys(fleet).map((ship) =>
      <List.Item>
        <List.Content floated="left" verticalAlign="middle">{ship}</List.Content>
        <List.Content floated="right" verticalAlign="middle">{fleet[ship]}x</List.Content>
      </List.Item>
    );
  }

  setColour() {
    return this.props.faction.toLowerCase() === 'empire' ? 'blue' : 'red';
  }

  render() {
    return (
      <Card centered color={this.setColour()}>
        <Card.Content>
          <Card.Header>{this.props.faction}</Card.Header>
          <List divided relaxed>
            {this.listShipNames(this.props.fleet)}
            <List.Item>
              Points: {this.props.points}
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    );
  }
}

export default ShipList;
