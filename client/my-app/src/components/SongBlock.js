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
                <iframe src={track.link} width="300" height="380" frameboard="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </li>
        ))}
        </p>
        );
    }
}
export default SongBlock;