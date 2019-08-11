
'use strict';

const common = require('./components/common');
const logger = require('./components/logger');
const server = require('./components/server');
const app = {
  app: { name: 'library-microservice' }
};

module.exports = Object.assign({}, common, logger, server, app);
