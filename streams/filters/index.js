const chalk = require('chalk');
const request = require('request');

const streamFilter = function (tweet) {
  console.log(chalk.green(tweet.user.screen_name, ' : ', tweet.text));

  // post request to particle cloud
  request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://api.particle.io/v1/devices/' + process.env.device_id + '/led',
    body: 'access_token=' + process.env.particle_access_token + '&arg=blink'
  }, function (error, response, body) {
    console.log(body);
  });
};

module.exports = streamFilter;
