const express = require('express');
const logger = require('../logger');
const repository = require('../services/books-repository');
const errorHandler = require('./error-handler');
const { jsonContentTypeFilter } = require('./filters');

const controller = express();
const jsonBodyParser = express.json();

/**
 * GET/
 */
controller.get('/book', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.getBooks().then((books) => {
    res.type('json').status(200).send(books);
  });
});

/**
 * GET/:id
 */
controller.get('/book/:id', (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.getBook(req.params.id).then((books) => {
    res.type('json').status(200).send(books);
  });
});

/**
 * POST/
 */
controller.post('/book', jsonContentTypeFilter, jsonBodyParser, (req, res) => {
  logger.debug(`Request received`, { method: req.method, url: req.url });
  return repository.addBook(req.body).then((book) => {
    res.type('json').status(201).send({ 'url': `/book/${book.id}` });
  });
});

/**
 * Error handling:
 * Goes at the end so it can catch all errors
 */
controller.use('/', errorHandler);

module.exports = controller;
