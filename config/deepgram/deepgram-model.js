require('dotenv').config();
const axios = require('axios');
// const fs = require('fs');

let url = 'https://brain.deepgram.com/v2/listen';
let username = process.env.DEEPGRAM_USERNAME;
let password = process.env.DEEPGRAM_PASSWORD;

module.exports = {
    postUrl: 
}