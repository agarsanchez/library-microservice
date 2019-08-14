const request = require('supertest');
const app = require('./app');
jest.mock('../services/books-repository', () => ({
  getBooks: () => Promise.resolve([{
    'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
    'author': 'J.K. Rowiling',
    'title': 'Harry Potter and The Goblet Of Fire',
  }]),
}));

describe('App controller', () => {

  describe('GET book', () => {
    test('It should handle GET requests', (done) => {
      request(app)
        .get('/book')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('It should return books', (done) => {
      request(app)
        .get('/book')
        .expect('Content-Type', /json/)
        .expect(200, [{
          'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
          'author': 'J.K. Rowiling',
          'title': 'Harry Potter and The Goblet Of Fire',
        }], done);
    });
  });
});
