import React, { Component } from 'react';
import './SongBlock.scss';

class SongBlock extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
      }
    

      componentDidMount() {
        fetch("http://localhost:9000/songs")
        .then(res => res.json())
        .then((result) => this.setState({ apiResponse: result }));
         // this.callAPI();
      }

    render(){
        console.log(this.state.apiResponse)
        return(
        <p className='App-intro'> {this.state.apiResponse.map(track => (
            <li key={track.id}>
                {track.link}
            </li>
        ))}
        </p>
        );
    }
}
export default SongBlock;