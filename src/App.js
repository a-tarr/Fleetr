import React, { Component } from 'react';
import { Ships } from './data/ships';
import { observable } from 'mobx';
import { Squadrons } from './data/squadrons';
import { List } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import ShipList from './ShipList';
import SetItem from './SetItem';
import './App.css';

var testEmpireData = ['vsd', 'vsd', 'tiefighter', 'tiefighter', 'tiefighter'];

class App extends Component {

  weightedRand(spec) {
    var table = [];

    for (let i in spec) {
      for (let j=0; j<spec[i]*100; j++) {
        table.push(i);
      }
    }

    var selectedType = table[Math.floor(Math.random() * table.length)];
    if (selectedType === 'ships') {
      return Ships;
    } else if (selectedType === 'squadrons') {
      return Squadrons;
    }
  }

  fillEmpire(weights, available, size) {
    const attemptsBeforeBreak = 200;
    let result = [];
    let totalPoints = 0;
    let attempts = 0;

    while (totalPoints < size) {
      let selectedType = this.weightedRand(weights);
      //TODO: extract this into a function (selectRandomProp)
      let keys = Object.keys(selectedType.empire);
      let randomKeyParent = keys[keys.length * Math.random() << 0];
      let randomKeyObject = selectedType.empire[randomKeyParent];
      //pick a random variant if its a ship
      if (selectedType === Ships) {
        keys = Object.keys(randomKeyObject);
        randomKeyObject = randomKeyObject[keys[keys.length * Math.random() << 0]];
      }
      //TODO: extract this into a function
      let chosenkey = available.indexOf(randomKeyParent);
      if (chosenkey !== -1 && randomKeyObject.points + totalPoints <= size) {
        result.push(randomKeyObject.name);
        available.splice(chosenkey, 1);
        totalPoints += randomKeyObject.points;
      }
      attempts++;
      if (attempts === attemptsBeforeBreak) {
        return {result, totalPoints};
      }
    }
    return {result, totalPoints};
  }

  groupShips(fleet) {
    let groups = {};
    for (let i = 0; i < fleet.length; i++) {
      if (!groups[fleet[i]]) {
        groups[fleet[i]] = 1;
      } else {
        groups[fleet[i]] = groups[fleet[i]] + 1;
      }
    }
    return groups;
  }

  render() {
    var x = this.fillEmpire({'ships':0.35, 'squadrons':0.65}, testEmpireData, 200).result;
    var fleet = this.groupShips(x);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Fleetr</h2>
        </div>
        <div className="app-container">
          <Grid padded>
            <Grid.Row columns="2">
              <Grid.Column>
                <ShipList faction="Empire" fleet={fleet}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="2">
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="5">
              <Grid.Column>
                <SetItem />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
