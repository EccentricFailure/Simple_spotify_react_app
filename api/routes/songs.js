var express = require('express');
var router = express.Router();

const data = [
    {id: 1, genre: 'grunge', link: 'https://open.spotify.com/embed/track/40VSbBSYbPN10vJYeZq4tm'},
    {id: 2, genre: 'indie-rock', link: 'https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20'},
    {id: 3, genre: 'idk', link: 'https://open.spotify.com/embed/track/29GCe8yTDCVKr6EowPKrER'},
    {id: 4, genre: 'grunge', link: 'https://open.spotify.com/embed/track/2v8sPwkqVDgWprsmGIis25'},
    {id: 5, genre: 'grunge', link: 'https://open.spotify.com/embed/track/0eENgTgNVheMpLiQO5aveL'},
    {id: 6, genre: 'grunge', link: 'https://open.spotify.com/embed/track/0ExY9ASOmSCFdQ1QiBpYd4'},
    {id: 7, genre: 'grunge', link: 'https://open.spotify.com/embed/track/2loEXJRB5ExGcUHYX365R5'},
    {id: 8, genre: 'grunge', link: 'https://open.spotify.com/embed/track/4zg2zMNSI0W8ipGA32kKp5'},
    {id: 9, genre: 'grunge', link: 'https://open.spotify.com/embed/track/1hNE737dkYD9ZM1J8H9chv'},
    {id: 10, genre: 'grunge', link: 'https://open.spotify.com/embed/track/1cSgnOFHPaWp6b3FHOjmP5'},
];

router.get('/', function(req, res, next) {
    res.json(data);
});

router.get('/:genre', function(req, res, next) {
    let found = data.find(function (item) {
        return item.genre == req.params.genre;
    });
    res.json(found);
});

module.exports = router;