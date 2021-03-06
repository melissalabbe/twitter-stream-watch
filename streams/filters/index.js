const chalk = require('chalk');
const request = require('request');
const fetch = require('node-fetch');

const alertDevice = function () {
  // post request to particle cloud
  request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://api.particle.io/v1/devices/' + process.env.device_id + '/led',
    body: 'access_token=' + process.env.particle_access_token + '&arg=blink'
  }, function (error, response, body) {
    const status = response.statusCode;
    if (status < 200 || status > 299) {
      console.log(body);
    }
  });
};

const getDeviceStatus = function () {
  // get device status
  fetch('https://api.particle.io/v1/devices/' + process.env.device_id + '?access_token=' + process.env.particle_access_token)
    .then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.connected) {
        alertDevice();
      } else {
        console.log('device offline');
      }
    }).catch(function (err) {
      console.log(err);
    });
};

const streamFilter = function (tweet) {
  console.log(chalk.green(tweet.user.screen_name, ' : ', tweet.text));
  getDeviceStatus();
};

module.exports = streamFilter;
