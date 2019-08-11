'use strict';

const LOGGER = require('./logger');

LOGGER.info(`Starting application process`, { pid: process.pid });

require('./web');
