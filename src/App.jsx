import React from 'react';
import { TimingObject } from 'timing-object';
import { TimingProvider } from 'timing-provider';
import { setTimingsrc } from 'timingsrc';
import choon from './choon.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.socketURL = 'ws://192.168.1.233:2276'; // Replace this with you computer's local network IP.
    this.timingProvider = new TimingProvider(this.socketURL);
    this.timingObject = new TimingObject();

    this.timingProvider.onreadystatechange = () => {
      if (this.timingProvider.readyState === 'open') {
        this.timingObject = new TimingObject(this.timingProvider);

        if (this.myRef.current) {
          setTimingsrc(this.myRef.current, this.timingObject);
        }
      }
    };
  }

  startAudio = () => {
    this.timingObject.update({ velocity: 1 });
  };

  stopAudio = () => {
    this.timingObject.update({ velocity: 0 });
  };

  resetAudio = () => {
    this.timingObject.update({ velocity: 0, position: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Timing Test</h1>
        <audio ref={this.myRef} src={choon} controls>
          <track kind="captions" />
        </audio>
        <button id="play-button" type="button" onClick={this.startAudio}>Play</button>
        <button id="pause-button" type="button" onClick={this.stopAudio}>Pause</button>
        <button id="pause-button" type="button" onClick={this.resetAudio}>Reset</button>
      </div>
    );
  }
}

export default App;
