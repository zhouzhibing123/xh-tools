// config 
const { baseUrl } = require('./config/config.json');

// tools 
const { _shake } = require(`${baseUrl}shake/index.js`);
const { _throttle } = require(`${baseUrl}throttle/index.js`);
const { _randomNumber } = require(`${randomNumber}random-number/index.js`);
const { _clone } = require(`${randomNumber}clone/index.js`);

module.exports = {
    _shake,
    _throttle,
    _randomNumber,
    _clone
}