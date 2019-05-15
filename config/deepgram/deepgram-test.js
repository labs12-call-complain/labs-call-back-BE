require('dotenv').config();
// const axios = require('axios');

const axios = require('axios');
// const fs = require('fs');

let url = 'https://brain.deepgram.com/v2/listen';
// let username = 'aladdin';
// let password = 'opensesame';
// let audio = fs.readFileSync('/path/to/audio.wav');

const test = axios({
    method: 'post',
    url: url,
    auth: {
        // basic: Y2FsbGFuZGNvbXBsYWluQGdtYWlsLmNvbTpjYWxsY29tcGxhaW4xMjM0NTY3ODk=
        username: 'callandcomplain@gmail.com',
        password: 'callcomplain123456789'
    },
    headers: {
        'Content-Type': 'application/json',
        // "Authorization": "Basic Y2FsbGFuZGNvbXBsYWluQGdtYWlsLmNvbTpjYWxsY29tcGxhaW4xMjM0NTY3ODk=",
    },
    params: {
        model: 'meeting',
        multichannel: true,
        punctuate: true,
        search: 'recorded line'
    },
    data: {url: "http://www.wavsource.com/snds_2018-06-03_5106726768923853/movies/iron_man/involved_not.wav" }
    })
    .then(response => {
        // console.log(response.data);
        console.log(response.data.results.channels[0].alternatives[0].transcript)
    })
    .catch(error => {
        console.log('Error happened!: ' + error);
    });


    console.log(test);