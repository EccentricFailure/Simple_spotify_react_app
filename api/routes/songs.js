var express = require('express');
var router = express.Router();

const data = [
    {id: 1, artist: 'Nirvana', title: 'Marigold', link: 'https://open.spotify.com/embed/track/40VSbBSYbPN10vJYeZq4tm'},
    {id: 2, artist: 'Arctic Monkeys', title: 'Crying Lightning', link: 'https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20'},
    {id: 3, artist: 'together PANGEA', title: 'Money on it', link: 'https://open.spotify.com/embed/track/29GCe8yTDCVKr6EowPKrER'},
    {id: 4, artist: 'Queens of the Stone Age', title: '...Like Clockwork', link: 'https://open.spotify.com/embed/track/2v8sPwkqVDgWprsmGIis25'},
    {id: 5, artist: 'KennyHoopla', title: 'how will i rest in piece if im buried by a highway?//', link: 'https://open.spotify.com/embed/track/0eENgTgNVheMpLiQO5aveL'},
    {id: 6, artist: 'YUNGBLUD', title: 'mars', link: 'https://open.spotify.com/embed/track/0ExY9ASOmSCFdQ1QiBpYd4'},
    {id: 7, artist: 'X Ambassadors', title: 'Zen', link: 'https://open.spotify.com/embed/track/2loEXJRB5ExGcUHYX365R5'},
    {id: 8, artist: 'The Orion Experience', title: 'The Cult of Dionysus', link: 'https://open.spotify.com/embed/track/4zg2zMNSI0W8ipGA32kKp5'},
    {id: 9, artist: 'Rammstein', title: 'Du riechst so gut', link: 'https://open.spotify.com/embed/track/1hNE737dkYD9ZM1J8H9chv'},
    {id: 10, artist: 'Mother Mother', title: 'Sleep Awake', link: 'https://open.spotify.com/embed/track/1cSgnOFHPaWp6b3FHOjmP5'},
    {id: 11, artist: 'Interpol', title: 'Obstacle 1', link: 'https://open.spotify.com/embed/track/3HjzdNcNfc136jfd1LXUHV'},
];

function matchesSearch(songs, query) {
    return songs.filter(function(el) {
        if (el.genre == query || el.artist == query || el.title == query)
            return true;
        else
            return false;
    })
}

router.get('/', function(req, res, next) {
    res.json(data);
});

router.get('/:query', function(req, res, next) {
    let found = matchesSearch(data, req.params.query);
    res.json(found);
});

router.post('/', function(req, res) {
    let songIds = data.map(song => song.id);
  
    let newId = songIds.length > 0 ? Math.max.apply(Math, songIds) + 1 : 1;

    let newSong = {
        id: newId,
        title: req.body.title,
        artist: req.body.artist,
        link: req.body.link
      };
      data.push(newSong);
      res.status(201).json(newSong);
});

router.delete('/:id', function (req, res) {
    let found = data.find(function (song) {
      return song.id === parseInt(req.params.id);
    });
  
    if (found) {
      let targetIndex = song.indexOf(found);
      song.splice(targetIndex, 1);
    }
    res.sendStatus(204);
});

module.exports = router;