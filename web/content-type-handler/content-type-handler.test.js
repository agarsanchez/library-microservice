const request = require('supertest');
const express = require('express');
const plugin = require('./content-type-handler');

describe('Content-Type handling', () => {
  test('It should return 400 when invalid content-type', (done) => {
    const server = express();
    server.use('/endpoint', plugin);

    request(server)
      .get('/endpoint')
      .set('Content-Type', 'application/xml')
      .expect(400, done);
  });
});
