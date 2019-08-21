const request = require('supertest');
const express = require('express');
const plugin = require('./json-content-type-filter');

describe('Content-Type handling', () => {
  test('It should return 400 when invalid content-type', (done) => {
    const server = express();
    server.use('/endpoint', plugin);

    request(server)
      .post('/endpoint')
      .set('Content-Type', 'application/xml')
      .expect(400, done);
  });
});
