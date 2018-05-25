import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Children1 from './components/Children1'

class App extends Component {
  state = {
    parentState: true,
    toChildren1: 'I am the parent sending something to children1',
    toChildren2: 'I am the parent sending something to children2',
    toChildren3: 'I am the parent sending something to children3',
    toChildren4: 'I am the parent sending something to children4',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Parent</h1>
        </header>
        <Children1
        toChildren1={this.state.toChildren1}
        toChildren2={this.state.toChildren2}
        toChildren3={this.state.toChildren3}
        toChildren4={this.state.toChildren4}
        />
      </div>
    );
  }
}

export default App;
