var express = require('express');
var router = express.Router();

const data = [
    {id: 1, link: 'https://open.spotify.com/track/40VSbBSYbPN10vJYeZq4tm?si=Eknm3ZeuRESuqTMpMEjl6A'},
    {id: 2, link: 'https://open.spotify.com/track/1CW1CIucafZQqlqMHvCAZa?si=xBXDVzABQQexS7UoR0ftSA'}
    //{id: 3, link: 'https://open.spotify.com/track/29GCe8yTDCVKr6EowPKrER?si=795A_YQ8SBa1mTe3mOChlg'},
   // {id: 4, link: 'https://open.spotify.com/track/2v8sPwkqVDgWprsmGIis25?si=uBtH62m1RXepAhMbB9FKXQ'},
   // {id: 5, link: 'https://open.spotify.com/track/0eENgTgNVheMpLiQO5aveL?si=K6vGvVc_TxyoRzyp4WmWMQ'},
];

router.get('/', function(req, res, next) {
    //res.send('API is working properly');
    res.json(data);
});

module.exports = router;