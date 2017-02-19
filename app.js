require('dotenv').config();
const Twitter = require('twitter');

const streamFilter = require('./streams/filters');
const streamError = require('./streams/error');
const streamIDs = require('./streams/ids');

const streamParameters = {
  follow: streamIDs.getStreamIDs()
};

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

client.stream('statuses/filter', streamParameters, function (stream) {
  stream.on('data', streamFilter);
  stream.on('error', streamError);
});

