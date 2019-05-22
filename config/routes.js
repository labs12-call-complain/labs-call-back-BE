const {postTweet, getTweet, delTweet } = require('./twitter/twitter-routes');
const { router } = require('./twitter/twitter-router')
const company = require('./company/company-routes')

module.exports = server => {
    //Tweet Routes
    server.post('/api/tweets', postTweet);
    server.get('/api/tweets/:id', getTweet);
    server.post('/api/tweets/:id', delTweet);
    server.post('api/makeTweet', router)

    //Company
    server.post('/api/company', company.tweet)

}