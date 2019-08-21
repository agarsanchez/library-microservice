const logger = require('../../logger');

const handler = (req, res, next) => {
  const contype = req.headers['content-type'];
  if (!contype || contype.indexOf('application/json') !== 0) {
    logger.debug(`Request content type not handled`, { method: req.method, url: req.url });
    return res.sendStatus(400);
  }
  next();
};

module.exports = handler;
