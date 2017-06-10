import React, { Component } from 'react';
import SetItem from '../SetItem';

class WaveList extends Component {
  render() {
    return (
      <div>
        <b>Wave 1</b><br/><br/>
        <SetItem name="Core Set" set="core" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Victory-class Star Destroyer" set="victory" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="CR90 Corellian Corvette" set="cr90" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Nebulon-B Frigate" set="nebulon" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Assault Frigate Mark II" set="assault" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Gladiator-class Star Destroyer" set="gladiator" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Rebel Fighter Squadrons" set="rebelsquadron" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Imperial Fighter Squadrons" set="imperialsquadron" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>

        <b>Wave 2</b><br/><br/>
        <SetItem name="Imperial-class Star Destroyer" set="imperial" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="MC30c Frigate" set="mc30" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Home One" set="homeone" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Rogues and Villians" set="roguesvillians" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Imperial Raider" set="raider" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <b>Wave 3</b><br/><br/>
        <SetItem name="Imperial Assault Carriers" set="assaultcarriers" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Rebel Transports" set="rebeltransports" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>

        <b>Wave 4</b><br/><br/>
        <SetItem name="Interdictor" set="interdictor" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Liberty" set="liberty" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <b>Wave 5</b><br/><br/>
        <SetItem name="Phoenix Home" set="phoenix" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Imperial Light Cruiser" set="imperialcruiser" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Rebel Fighter Squadrons II" set="rebelsquadron2" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
        <SetItem name="Imperial Fighter Squadrons II" set="imperialsquadron2" store={this.props.store} updater={this.flipCountToReset} /><br/><br/>
      </div>
    );
  }
}

export default WaveList;