import { observable } from 'mobx';

export default class Store {
  @observable empireShips;
  @observable rebelShips;
  @observable shipRatio;
  @observable squadronRatio;

  constructor() {
    this.empireShips = [];
    this.rebelShips = [];
  }

  addShips(ships) {
    this.empireShips = this.empireShips.concat(ships.empire)
    this.rebelShips = this.rebelShips.concat(ships.rebel)
  }

  removeShips(ships) {
    ships.empire.forEach((item) => {
      this.empireShips.splice(this.empireShips.indexOf(item), 1);
    })

    ships.rebel.forEach((item) => {
      this.rebelShips.splice(this.rebelShips.indexOf(item), 1);
    })
  }

  reset() {
    this.empireShips = [];
    this.rebelShips = [];
  }
}
