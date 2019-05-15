require('dotenv').config();
const Twitter = require('twitter');
// const db = require('file')

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


// const getFav = client.get('favorites/list', function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets);  // The favorites.
//     console.log(response);  // Raw response object.
// });


const postTweet = async function() {
    try {
        tweet = await client.post('statuses/update', {status: "Post from ExpressJS 5"});
        db.insert(tweet.id)
        
        console.log(tweet.id);
        console.log(tweet.id_str);
        console.log(tweet.text);
        console.log(tweet.entities);
    } catch (error) {
        console.log(error);
    }
}


    





// function postTweet() { client.post('statuses/update', {status: "I love twitter"})
//     .then(tweet => {
//         console.log(tweet)
//     })
//     .catch(error => {
//         console.log(error)
// })
// }


postTweet();