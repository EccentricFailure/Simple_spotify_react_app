import React, { Component } from 'react';
import './content.scss';
import SongBlock from './SongBlock';

const data=(
  <div className="box">
      <SongBlock/>
  </div>
)

class Content extends Component {


  render(){
    return (
      <main className="content">
          {data}
         
      </main>
    )
  }
}
export default Content;