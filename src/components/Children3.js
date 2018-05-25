import React, { Component } from 'react';
import { Store } from '../Store';
import Children4 from './Children4'

class Children3 extends Component {
  state={}


  render() {
    console.log('RENDER CHILDREN 3')
    console.log(this.props.data)
    return (
      <div className="App">
        <h1>Children 3</h1>
        <p>{this.props.toChildren3}</p>
        <p>{this.props.contextToChildren3}</p>
        <p>------------------------</p>
        <button onClick={()=>{this.props.updateUserData('IM COMING FROM CHILDREN3')}}>Click</button>
        <button onClick={this.props.reload}>RELOAD</button>
        <Store.Consumer>
        {data =>(<Children4
                        toChildren4={this.props.toChildren4}
                        userInfo={data.nice.userInfo}
                        />)}
        </Store.Consumer>
      </div>
    );
  }
}

export default Children3;
