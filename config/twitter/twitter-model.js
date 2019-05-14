require('dotenv').config();

const knex = require('knex')

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/CallComplain.db3'
    },
    useNullAsDefault: true
};

const db = knex(knexConfig);

module.exports = {
    postTweet
};

function postTweet(tweets) { 
    client.post('statuses/update', tweets)
    .then(tweet => {
        console.log(tweet)
    })
    .catch(error => {
        console.log(error)
})
}