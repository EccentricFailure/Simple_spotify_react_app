import React, { Component } from 'react';
import './content.scss';

const data=(
  <div className="box">
      <h2>My div content </h2>
  </div>
)

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

  componentWillMount() {
      this.callAPI();
  }

  render(){
    return (
      <main className="content">
        <p className='App-intro'>{this.state.apiResponse}</p>
          {data}
          {data}
          {data}
          {data}
          {data}
      </main>
    )
  }
}
export default Content;