var express = require('express');
var router = express.Router();

const data = [
    {id: 1, link: 'https://open.spotify.com/embed/track/40VSbBSYbPN10vJYeZq4tm'},
    {id: 2, link: 'https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20'},
    {id: 3, link: 'https://open.spotify.com/embed/track/29GCe8yTDCVKr6EowPKrER'},
    {id: 4, link: 'https://open.spotify.com/embed/track/2v8sPwkqVDgWprsmGIis25'},
    {id: 5, link: 'https://open.spotify.com/embed/track/0eENgTgNVheMpLiQO5aveL'},
    {id: 6, link: 'https://open.spotify.com/embed/track/0ExY9ASOmSCFdQ1QiBpYd4'},
    {id: 7, link: 'https://open.spotify.com/embed/track/2loEXJRB5ExGcUHYX365R5'},
    {id: 8, link: 'https://open.spotify.com/embed/track/4zg2zMNSI0W8ipGA32kKp5'},
    {id: 9, link: 'https://open.spotify.com/embed/track/1hNE737dkYD9ZM1J8H9chv'},
    {id: 10, link: 'https://open.spotify.com/embed/track/1cSgnOFHPaWp6b3FHOjmP5'},
];

router.get('/', function(req, res, next) {
    //res.send('API is working properly');
    res.json(data);
});

module.exports = router;