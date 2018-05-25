import React, { Component } from 'react';
import { Store } from '../Store';
import Children3 from './Children3'

class Children2 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Children 2</h1>
        <p>{this.props.toChildren2}</p>
        <p>{this.props.contextToChildren2}</p>
        <p>------------------------</p>
        <Store.Consumer>
        {data => (<Children3
          toChildren3={this.props.toChildren3}
          toChildren4={this.props.toChildren4}
          contextToChildren3={data.store.contextToChildren3}
        />)}
        </Store.Consumer>
      </div>
    );
  }
}

export default Children2;
