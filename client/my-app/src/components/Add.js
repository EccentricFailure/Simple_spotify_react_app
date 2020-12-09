import React, { Component } from 'react';
import './Add.scss';

class Add extends Component {
  state = {

  };

  componentDidMount() {
    fetch("http://localhost:9000/songs")

  }

  render(){
    return (
      <h1>a</h1>
    );
  }
}
export default Add;