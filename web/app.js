const express = require('express');
const logger = require('../logger');

const app = express();


app.get('/', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  res.type('html').status(200).send('Hello World!');
});

module.exports = app;
