import React, { Component } from 'react';

class Children4 extends Component {
  render() {
    console.log('RENDER CHILDREN 4')
    return (
      <div className="App">
        <h1>Children 4</h1>
        <p>{this.props.toChildren4}</p>
        <p>{this.props.userInfo}</p>
        <p>------------------------</p>
      </div>
    );
  }
}

export default Children4;