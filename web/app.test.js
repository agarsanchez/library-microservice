const request = require('supertest');
const app = require('./app');
jest.mock('../services/books-repository', () => ({
  getBooks: () =>
    Promise.resolve([{
      'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
      'author': 'J.K. Rowiling',
      'title': 'Harry Potter and The Goblet Of Fire',
    }]),
  addBook: (book) =>
    Promise.resolve({
      'id': 'd92d6a55-d808-48db-9faf-64246484aeee',
      'author': 'J.K. Rowiling',
      'title': 'Harry Potter and The Half-Blooded Prince',
    }),
  getBook: (id) =>
    Promise.resolve([{
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
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    test('It should return books', (done) => {
      request(app)
        .get('/book')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
          'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
          'author': 'J.K. Rowiling',
          'title': 'Harry Potter and The Goblet Of Fire',
        }], done);
    });

    test('It should return a single book', (done) => {
      request(app)
        .get('/book/d92d6a55-d808-48db-9faf-64246484ae2c')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
          'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
          'author': 'J.K. Rowiling',
          'title': 'Harry Potter and The Goblet Of Fire',
        }], done);
    });
  });

  describe('POST book', () => {
    test('should store a book', (done) => {
      request(app)
        .post('/book')
        .set('Content-Type', 'application/json')
        .send({
          'author': 'J.K. Rowiling',
          'title': 'Harry Potter and The Half-Blooded Prince',
        })
        .expect('Content-Type', /json/)
        .expect(201, {
          'url': '/book/d92d6a55-d808-48db-9faf-64246484aeee',
        }, done);
    });
  });

  describe('Basic common checks', () => {
    test('should reject requests with invalid content-type', (done) => {
      request(app)
        .post('/book')
        .set('Content-Type', 'application/xml')
        .send('<somexml></somexml>')
        .expect(400, done);
    });
  });

  describe('Error handling', () => {
    test('It should return an error when internal error', (done) => {
      request(app)
        .post('/book')
        .set('Content-Type', 'application/json')
        .send('rubbish')
        .expect('Content-Type', /json/)
        .expect(500, { 'error': 'Internal server error' }, done);
    });
  });
});
