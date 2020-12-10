import React, { Component, useState } from 'react';
import './Add.scss';
import axios from 'axios';

const Add = () => {

  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [link, setLink] = useState();
  const [refresh, doRefresh] = useState();
  
  return (
    <div className="input-wrap">
        <div className="input-div">
          <input type="text" placeholder="Song name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="input-div">
          <input type="text"  placeholder="Artist name" value={artist} onChange={(e) => setArtist(e.target.value)}/>
        </div>
        <div className="input-div">
          <input type="text" placeholder="Song spotify share link" value={link} onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div>
          <button onClick={async () => {
            const result = await axios.post('http://localhost:9000/songs', {
              artist, title, link
            });
            console.log(result);
            window.location.reload();
          }}
          >Submit</button>
        </div>
    </div>
  );

}
export default Add;