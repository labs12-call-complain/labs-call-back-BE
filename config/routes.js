const {sendTweet } = require('./twitter/twitter-routes');

module.exports = server => {
    server.post('https://api.twitter.com/1.1/', sendTweet)
}