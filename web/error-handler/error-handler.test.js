const request = require('supertest');
const express = require('express');
const plugin = require('./error-handler');

describe('Error handling', () => {
  test('It should return 500 and an error object', (done) => {
    const server = express();
    server.get('/brokenEndpoint', (req, res) => {
      throw new Error('some error');
    });
    server.use('/brokenEndpoint', plugin);

    request(server)
      .get('/brokenEndpoint')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, { 'error': 'Internal server error' }, done);
  });
});
