var express = require('express');
var router = express.Router();

const data = [
    {id: 1, link: 'https://open.spotify.com/embed/track/40VSbBSYbPN10vJYeZq4tm'},
    {id: 2, link: 'https://open.spotify.com/embed/track/1CW1CIucafZQqlqMHvCAZa'},
    {id: 3, link: 'https://open.spotify.com/embed/track/29GCe8yTDCVKr6EowPKrER'},
    {id: 4, link: 'https://open.spotify.com/embed/track/2v8sPwkqVDgWprsmGIis25'},
    {id: 5, link: 'https://open.spotify.com/embed/track/0eENgTgNVheMpLiQO5aveL'},
];

router.get('/', function(req, res, next) {
    //res.send('API is working properly');
    res.json(data);
});

module.exports = router;