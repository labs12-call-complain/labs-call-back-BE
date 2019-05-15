require('dotenv').config();
const Twitter = require('./twitter-model');

module.exports ={ 
    
    postTweet: async function(req, res){
        try {
            const tweet = Twitter.createTweet(req.body);
            res.status(200).json({
                message: `New Tweet Created : ${tweet.text} `
            })
        } catch (error) {
            res.status(500).json({
                message: `unable to create tweet : ${error}`
            })
        }
    },
    getTweet: async function(req, res){
        try {
            const tweet = Twitter.getSingleTweet(req.params.id);
            res.status(200).json({
                message: `Recieved tweet: ${tweet.text}`
            })
        } catch (error) {
            res.status(500).json({
                message: `unable to get tweet : ${error}`
            })
        }
    },
    delTweet: async function(req, res){
        try {
            const id = Twitter.deleteTweet(req.params.id);
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

