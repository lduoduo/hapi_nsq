'use strict';

var { env, ip } = require('./env');
var Config = require(`./config.${env}.js`);

module.exports = new Config(ip);