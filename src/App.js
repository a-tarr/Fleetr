import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Grid, Button, Input, Popup, Icon, Card } from 'semantic-ui-react';
import { Sticky } from 'react-sticky';
import ShipList from './ShipList';
import SetItem from './SetItem';
import WaveList from './WaveList';
import { fillFaction, groupShips } from './utility.js';
import './styles/App.css';
import styled from 'styled-components';

const ListWrapper = styled.div`
  background-color: #333;
  background-image: url(https://bapcdn.azureedge.net/images/space.jpeg);
  background-attachment: fixed;
  background-position: 0 -500px;
`;

const List = styled(Card.Group)`
  &&& {
    margin: 0;
    display: flex;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
`;

const StyledGrid = styled(Grid)`
  &&& {
    margin: 0;
  }
`

const Copyright = styled.div`
  font-size: 10px;
  color: #333;
`

@observer
class App extends Component {
  @observable rebelPoints = 0;
  @observable rebelFleet = [];
  @observable empirePoints = 0;
  @observable empireFleet = [];
  @observable ratio = {'ships': 50, 'squadrons': 50}
  @observable points = 200;
  @observable flipCountToReset = true;
  @observable pointserror = false;
  @observable shiperror = false;

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.pointsChange = this.pointsChange.bind(this);
  }

  onChange(event) {
    if (isNaN(event.target.value) || event.target.value < 0 || event.target.value > 100) {
      this.shiperror = true;
    } else {
      this.shiperror = false;
    }
    this.ratio.ships = event.target.value;
  }

  pointsChange(event) {
    if (isNaN(event.target.value) || event.target.value < 0) {
      this.pointserror = true;
    } else {
      this.pointserror = false;
    }
    this.points = event.target.value;
  }

  generateLists(ratio) {
    this.ratio.squadrons = 100 - this.ratio.ships;
    if (this.shiperror === false && this.pointserror === false) {
      let empire = fillFaction('empire', ratio, this.props.store.empireShips, this.points);
      this.empirePoints = empire.totalPoints;
      this.empireFleet = groupShips(empire.result);

      let rebel = fillFaction('rebel', ratio, this.props.store.rebelShips, this.points);
      this.rebelPoints = rebel.totalPoints;
      this.rebelFleet = groupShips(rebel.result);
    }
  }

  reset() {
    this.rebelPoints = 0;
    this.rebelFleet = [];
    this.empirePoints = 0;
    this.empireFleet = [];
    this.ratio = {'ships': 50, 'squadrons': 50}
    this.points = 200;
    this.flipCountToReset = !this.flipCountToReset;
    this.props.store.reset();
    this.pointserror = false;
    this.shiperror = false;
  }

  render() {
    return (
        <div className="App">
          <ListWrapper>
            <List>
              <ShipList faction="Empire" fleet={this.empireFleet} points={this.empirePoints} />
              <ShipList faction="Rebel" fleet={this.rebelFleet} points={this.rebelPoints} />
            </List>
          </ListWrapper>
          <div className="app-container">
            <StyledGrid stackable>
              <Grid.Row centered columns="3">
                <Grid.Column>
                    <Sticky stickyClassName={'sticky-buttons'} topOffset={-5}>
                      <div>
                        <Button onClick={() => {
                            this.generateLists(this.ratio);
                            window.scrollTo(0, 0);
                          }}>
                          Generate
                        </Button>
                        <Button onClick={() => this.reset()}>
                          Reset
                        </Button>
                      </div>
                    </Sticky>
                </Grid.Column>
                <Grid.Column>
                  Points: <Input name="pointsinput" error={this.pointserror} onChange={this.pointsChange} value={this.points} className="weight-input" size="mini" />&nbsp;
                  Ship % chance: <Input name="shipsinput" error={this.shiperror} onChange={this.onChange} value={this.ratio.ships} className="weight-input" size="mini" />
                  &nbsp;&nbsp;
                  <Popup
                    trigger={<Icon size="large" name="help circle" />}
                    content="Change this if you want to lean your fleet towards more ships or more squadrons."
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="set-list" columns="3">
                  <Grid.Column>
                    <b>Wave 1</b><br/><br/>
                    <SetItem name="Core Set" set="core" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Victory-class Star Destroyer" set="victory" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="CR90 Corellian Corvette" set="cr90" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Nebulon-B Frigate" set="nebulon" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Assault Frigate Mark II" set="assault" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Gladiator-class Star Destroyer" set="gladiator" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Rebel Fighter Squadrons" set="rebelsquadron" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Imperial Fighter Squadrons" set="imperialsquadron" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                  </Grid.Column>
                  <Grid.Column>
                    <b>Wave 2</b><br/><br/>
                    <SetItem name="Imperial-class Star Destroyer" set="imperial" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="MC30c Frigate" set="mc30" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Home One" set="homeone" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Rogues and Villians" set="roguesvillians" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Imperial Raider" set="raider" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <b>Wave 3</b><br/><br/>
                    <SetItem name="Imperial Assault Carriers" set="assaultcarriers" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Rebel Transports" set="rebeltransports" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                  </Grid.Column>
                  <Grid.Column>
                    <b>Wave 4</b><br/><br/>
                    <SetItem name="Interdictor" set="interdictor" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Liberty" set="liberty" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <b>Wave 5</b><br/><br/>
                    <SetItem name="Phoenix Home" set="phoenix" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Imperial Light Cruiser" set="imperialcruiser" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Rebel Fighter Squadrons II" set="rebelsquadron2" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                    <SetItem name="Imperial Fighter Squadrons II" set="imperialsquadron2" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
                  </Grid.Column>
              </Grid.Row>
            </StyledGrid>
          </div>
          <Copyright>© Anthony Tarr - {new Date().getFullYear()}</Copyright>
        </div>
    );
  }
}

export default App;
