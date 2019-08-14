const express = require('express');
const logger = require('../logger');
const repository = require('../services/books-repository');

const app = express();


app.get('/book', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.getBooks().then((books) => {
    res.type('json').status(200).send(books);
  });
});

module.exports = app;
