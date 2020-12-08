import React, { Component } from 'react';
import './AllSongs.scss';
import SongBlock from './SongBlock';

class Content extends Component {
  state = {
    songs: [],
    loading: true,
  };


  componentDidMount() {
    fetch("http://localhost:9000/songs")
    .then(res => res.json())
    .then((result) => this.setState({ loading: false, songs: result }));
  }

  render(){
    console.log(this.state.songs)
    return (
      <SongBlock loading={this.state.loading} songs={this.state.songs}/>
    );
  }
}
export default Content;