const express = require('express');
const logger = require('../logger');
const repository = require('../services/books-repository');

const app = express();

/**
 * Allow body content handling
 */
app.use(express.json());

/**
 * Basic common thecks:
 * Content-Type validation
 */
app.use('/', (req, res, next) => {
  const contype = req.headers['content-type'];
  if (!contype || contype.indexOf('application/json') !== 0) {
    logger.debug(`Request content type not handled`, { method: req.method, url: req.url });
    return res.sendStatus(400);
  }
  next();
});

/**
 * GET/
 */
app.get('/book', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.getBooks().then((books) => {
    res.type('json').status(200).send(books);
  });
});

/**
 * POST/
 */
app.post('/book', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.addBook(req.body).then((book) => {
    res.type('json').status(201).send({ 'url': `/book/${book.id}` });
  });
});


module.exports = app;
