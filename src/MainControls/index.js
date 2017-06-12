import React, { Component } from 'react';
import { Grid, Button, Input, Popup, Icon, Card } from 'semantic-ui-react';

class MainControls extends Component {
  render() {
    return (
      <div className="list-row">
        <Button onClick={() => this.generateLists(this.ratio)}>
          Generate
        </Button>
        <Button onClick={() => this.reset()}>
          Reset
        </Button>
        Points: <Input name="pointsinput" error={this.pointserror} onChange={this.pointsChange} value={this.points} className="weight-input" size="mini" />&nbsp;
        Ship % chance: <Input name="shipsinput" error={this.shiperror} onChange={this.onChange} value={this.ratio.ships} className="weight-input" size="mini" />
        &nbsp;&nbsp;
        <Popup
          trigger={<Icon size="large" name="help circle" />}
          content="Change this if you want to lean your fleet towards more ships or more squadrons."
        />
      </div>
    );
  }
}

export default MainControls;