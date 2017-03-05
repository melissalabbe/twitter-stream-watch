const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

require('dotenv').config();
const Twit = require('twit');

const streamFilter = require('./streams/filters');
const streamError = require('./streams/error');
const streamIDs = require('./streams/ids');

const streamParameters = {
  follow: streamIDs.getStreamIDs()
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
