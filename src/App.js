import React, { Component } from 'react';
import logo from './logo.svg';
import { Ships } from './data/ships';
import { Squadrons } from './data/squadrons';
import './App.css';

var testEmpireData = ['vsd', 'tiefighter'];

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
    const attemptsBeforeBreak = 100;
    let result = [];
    let i = 0;
    let attempts = 0;

    while (i < size) {
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
      if (chosenkey !== -1) {
        result.push(randomKeyObject.name);
        available.splice(chosenkey, 1);
        i+= randomKeyObject.points;
      }
      attempts++;
      if (attempts === attemptsBeforeBreak) {
        return result;
      }
    }
    return result;

  }

  //var rand012 = weightedRand({'ship':0.35, 'squadron':0.65});
  //console.log(rand012()); // random in distribution...

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.fillEmpire({'ships':0.35, 'squadrons':0.65}, testEmpireData, 200)}</div>
      </div>
    );
  }
}

export default App;
