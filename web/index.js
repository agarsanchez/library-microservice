const app = require('./app');
const config = require('../config');
const logger = require('../logger');

app.listen(config.server.port, () => {
  logger.info('Starting server', { 'port': config.server.port });
});

module.exports = app;
