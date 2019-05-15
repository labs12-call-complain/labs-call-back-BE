const router = require('express').Router();

const formDB = require('./twitter-model')


router.post('/makeatweet', (req, res) => {
    const post = req.body;

    formDB
    .postTweet(post)

    .then(post => {
        res.status(201).json(post)
    })
    .catch(error => {
        res.status(400).json({
            error: "couldnt post"
        })
    })
})

module.exports = router;