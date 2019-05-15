const {postTweet, getTweet, delTweet } = require('./twitter/twitter-routes');

module.exports = server => {
    //Tweet Routes
    server.post('/api/tweets', postTweet);
    server.get('/api/tweets/:id', getTweet);
    server.post('/api/tweets/:id', delTweet);

}