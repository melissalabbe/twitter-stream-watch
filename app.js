require('dotenv').config();
const Twit = require('twit');

const streamFilter = require('./streams/filters');
const streamError = require('./streams/error');
const streamIDs = require('./streams/ids');

const streamParameters = {
  follow: streamIDs.getStreamIDs(),
  track: 'GirlsWhoCode'
};

const T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

const stream = T.stream('statuses/filter', streamParameters);
stream.on('tweet', streamFilter);
stream.on('error', streamError);
