import React, { Component } from 'react';
import Children4 from './Children4'

class Children3 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Children 3</h1>
        <p>{this.props.toChildren3}</p>
        <p>------------------------</p>
        <Children4
        toChildren4={this.props.toChildren4}
        />
      </div>
    );
  }
}

export default Children3;