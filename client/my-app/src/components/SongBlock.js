import React, { Component } from 'react';
import './SongBlock.scss';
import axios from 'axios';

class SongBlock extends Component{

    state = { id:null, songDetails: false};

    refresh(){
        window.location.reload();
    }

    render(){
        const {loading, songs} = this.props;
        let songInfo = null;

        if (!loading && songs.length > 0) {
            songInfo = songs.map(song => {
                const ID = song.id;
                return(
                    <div className='item' key={song.id}>
                        <iframe title="what" src={song.link} width="300" height="380" frameboard="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        <button onClick={async () => {
                            const result = await axios.delete(`http://localhost:9000/songs/${ID}`);
                            this.refresh();
                        }}>
                            Delete
                        </button>
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