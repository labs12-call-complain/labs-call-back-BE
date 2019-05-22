require('dotenv').config();
const Twitter = require('twitter')
const TwitterModel = require('./twitter-model');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


module.exports = { 
    
    postTweet: async function(req, res){
        try {
            const tweet = req.body;
            const tweetConfirm = await client.post('statuses/update', tweet);
            const dbTweet = await TwitterModel.createTweet(tweetConfirm);
            res.status(200).json({
                message: `New Tweet Created : ${dbTweet.text}`
            })
        } catch (error) {
            res.status(500).json({
                message: `unable to create tweet : ${error}`
            })
        }
    },
    getTweet: async function(req, res){
        try {
            const tweetConfirm = await client.get('statuses/show', {id})
            const dbTweet = TwitterModel.getSingleTweet(tweetConfirm);
            res.status(200).json({
                message: `Recieved tweet: ${dbTweet.text}`
            })
        } catch (error) {
            res.status(500).json({
                message: `unable to get tweet : ${error}`
            })
        }
    },
    delTweet: async function(req, res){
        try {
            const delConfirm = await client.post('statuses/destroy', {id})
            const id = TwitterModel.deleteTweet(delConfirm);
            if (id) {
                res.status(200).json({
                    message: `Removed tweet with id : ${id}`
                })
            } else {
                res.status(401).json({
                    message: `Tweet not found with id : ${id}`
                })
            }
        } catch (error) {
            res.status(500).json({
                message: `unable to get tweet: ${error}`
            })
        }
    },  

}

