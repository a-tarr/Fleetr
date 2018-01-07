import { Ships } from './data/ships';
import { Squadrons } from './data/squadrons';

export function weightedRand(spec) {
  var table = [];

  for (let i in spec) {
    for (let j = 0; j < spec[i]; j++) {
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

export function fillFaction(faction, weights, available, size) {
  const attemptsBeforeBreak = 100;
  let ships = available.slice(0);
  let result = [];
  let totalPoints = 0;
  let attempts = 0;

  while (totalPoints < size) {
    let selectedType = weightedRand(weights);
    //TODO: extract this into a function (selectRandomProp)
    let keys = Object.keys(selectedType[faction]);
    let randomKeyParent = keys[keys.length * Math.random() << 0];
    let randomKeyObject = selectedType[faction][randomKeyParent];
    //pick a random variant if its a ship
    if (selectedType === Ships) {
      keys = Object.keys(randomKeyObject);
      randomKeyObject = randomKeyObject[keys[keys.length * Math.random() << 0]];
    }
    //TODO: extract this into a function
    let chosenkey = ships.indexOf(randomKeyParent);
    if (chosenkey !== -1 && randomKeyObject.points + totalPoints <= size) {
      result.push(randomKeyObject.name);
      ships.splice(chosenkey, 1);
      totalPoints += randomKeyObject.points;
    }
    attempts++;
    if (attempts === attemptsBeforeBreak) {
      return {result, totalPoints};
    }
  }
  return {result, totalPoints};
}

export function groupShips(fleet) {
  let groups = {};
  for (let i = 0; i < fleet.length; i++) {
    if (!groups[fleet[i]]) {
      groups[fleet[i]] = 1;
    } else {
      groups[fleet[i]] += 1;
    }
  }
  return groups;
}
