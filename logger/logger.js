
'use strict';
const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
  level: config.logger.level,
  format: winston.format.combine(
    winston.format.label({label: 'lb-ms'}),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.colorize()
  ),
  defaultMeta: { service: config.app.name }
});

if (config.logger.enabled) {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
