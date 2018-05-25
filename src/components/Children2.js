import React, { Component } from 'react';
import { Store } from '../Store';
import Children3 from './Children3'

class Children2 extends Component {
  reload = () => {
    this.setState({reload:true})
  }
  render() {
    console.log('RENDER CHILDREN 2')

    return (
      <div className="App">
        <h1>Children 2</h1>
        <p>{this.props.toChildren2}</p>
        <p>{this.props.contextToChildren2}</p>
        <p>------------------------</p>
        <Store.Consumer>
        {data => (<Children3
          data={data}
          toChildren3={this.props.toChildren3}
          toChildren4={this.props.toChildren4}
          contextToChildren3={data.nice.contextToChildren3}
          updateUserData={data.updateUserData}
          reload={this.reload}
        />)}
        </Store.Consumer>
      </div>
    );
  }
}

export default Children2;
