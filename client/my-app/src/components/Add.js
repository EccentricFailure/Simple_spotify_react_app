import React, { useState } from 'react';
import './Add.scss';
import axios from 'axios';

const Add = () => {

  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [link, setLink] = useState();

  return (
    <div className="input-wrap">
        <div>
          Artist name:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          Song name:
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
        </div>
        <div>
          Song share link:
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div>
          <button onClick={async () => {
            const result = await axios.post('http://localhost:9000/songs', {
              artist, title, link
            });
            console.log(result);
          }}
          >Submit</button>
        </div>
    </div>
  );

}
export default Add;