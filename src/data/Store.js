import { observable } from 'mobx';

class Store {
  @observable empireShips;
  @observable rebelShips;

  constructor() {
    this.empireShips = [];
    this.rebelShips = [];
  }

  addShips(ships) {
    this.empireShips.concat(ships.empire)
    this.rebelShips.concat(ships.rebel)
    console.log(this.empireShips);
  }

  removeShips(ships) {

  }
}

const store = new Store();
export default store;
