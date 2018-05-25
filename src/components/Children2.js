import React, { Component } from 'react';
import Children3 from './Children3'

class Children2 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Children 2</h1>
        <p>{this.props.toChildren2}</p>
        <p>------------------------</p>
        <Children3
          toChildren3={this.props.toChildren3}
          toChildren4={this.props.toChildren4}
        />
      </div>
    );
  }
}

export default Children2;
