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
            console.log(error)
        }
    },
    deleteTweet: async function(id) {
        try {
            
        } catch (error) {
            
        }
        
    }


}

// module.exports = {
    
//     createTweet :  client.post('statuses/update', {status: 'I Love Twitter'})
//         .then(function (tweet) {
//             console.log(tweet);
//         }) //it should return tweet, user and id
//         .catch(function (error) {
//             throw err
//         }),
//     deleteTweet: client.post('statuses/destroy/:id', {id: '',  name: ''})
//         .then()
//         .catch(),
//     getSingleTweet: client.get('statuses/show/:id', {name: ''})
//         .then()
//         .catch(),

// }





console.log(client);