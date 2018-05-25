import React, { Component } from 'react';
import { Store } from '../Store';
import Children2 from './Children2'


class Children1 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Children 1</h1>
        <p>{this.props.toChildren1}</p>
        <p>------------------------</p>
        <Store.Consumer>
          {data => (<Children2 
                      toChildren2={this.props.toChildren2}
                      toChildren3={this.props.toChildren3}
                      toChildren4={this.props.toChildren4}
                      contextToChildren2={data.store.contextToChildren2}
                    />)}
        </Store.Consumer>
      </div>
    );
  }
}

export default Children1;
