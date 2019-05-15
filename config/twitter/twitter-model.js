require('dotenv').config();
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


module.exports = {

    createTweet: async function(tweet) {
        try {
            tweetConfirm = await client.post('statuses/update', tweet);
        } catch (error) {
            console.log(error);
        }
    },
    getSingleTweet: async function(id){
        try {
            tweetConfirm = await client.get('statuses/show', {id})
        } catch (error) {
            console.log(error);
        }
    },
    deleteTweet: async function(id) {
        try {
            delConfirm = await client.post('statuses/destroy', {id})
        } catch (error) {
            console.log(error)
        }
        
    },
    // getTweetByUser,
    // getLastNTweets
}

