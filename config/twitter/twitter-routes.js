require('dotenv').config();
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = {
    sendTweet
}

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);

async function sendTweet(req, res) {
    try {
        const tweet = await client.post(
            'statuses/update', 
            {status: 'Tweet From Express'}
        );
        console.log(tweet)
    } catch (error) {
        console.log(error)
    }
    

}

// client.post('statuses/update', {status: 'I Love Twitter'})
//     .then(function (tweet) {
//         console.log(tweet);
//     })
//     .catch(function (error) {
//         throw error;
//     })