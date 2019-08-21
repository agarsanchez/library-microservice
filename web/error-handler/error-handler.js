const logger = require('../../logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`Internal server error: ${err}`);
  res.type('json').status(500).send({ error: 'Internal server error' });
};

module.exports = errorHandler;
