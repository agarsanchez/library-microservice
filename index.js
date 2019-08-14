'use strict';

const LOGGER = require('./logger');
require('config');

LOGGER.info(`Starting application process`, { pid: process.pid });

module.exports = require('./web');
