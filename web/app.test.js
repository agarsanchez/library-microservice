const request = require('supertest');
const app = require('./app');
describe('Library microservice', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, 'Hello World!', done);
  });
});
