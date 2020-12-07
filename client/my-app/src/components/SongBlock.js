import React, { Component } from 'react';
import './SongBlock.scss';

class SongBlock extends Component{

    state = { id:null, songDetails: false};


    render(){
        const {loading, songs} = this.props;
        let songInfo = null;

        if (!loading && songs.length > 0) {
            songInfo = songs.map(song => {
                return(
                    <div className='item' key={song.id}>
                        <iframe src={song.link} width="300" height="380" frameboard="0" allowTransparency="true" allow="encrypted-media"></iframe>
                    </div>
                );
            })
        }
        if (loading) {
            songInfo = <h3>Loading song data now...</h3>;
          }
        return(
            <div className="song-list">

                {songInfo}
            </div>
        );
    }
}
export default SongBlock;