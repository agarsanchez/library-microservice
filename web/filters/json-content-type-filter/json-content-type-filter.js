const logger = require('../../../logger');

const filter = (req, res, next) => {
  const contype = req.headers['content-type'];
  if (!contype || contype.indexOf('application/json') !== 0) {
    logger.debug(`Invalid content-type`, { method: req.method, url: req.url });
    return res.sendStatus(400);
  }
  next();
};

module.exports = filter;
