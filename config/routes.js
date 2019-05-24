const {getAll, getTweet, postTweet, delTweet } = require('./twitter/twitter-routes');
// const company = require('./company/company-routes')

module.exports = server => {
    //Tweet Routes
    server.get('/api/tweets/', getAll);
    server.get('/api/tweets/:id', getTweet);
    server.post('/api/tweets', postTweet);
    server.post('/api/tweets/:id', delTweet);
    

    //Company
    // server.post('/api/company', company.tweet)

}