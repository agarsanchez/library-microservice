const repo = require('./repository');

describe('Book repository', () => {

  test('should return all the books', (done) => {
    repo.getBooks().then((books) => {
      expect(books).toEqual([{
        'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
        'author': 'J.K. Rowiling',
        'title': 'Harry Potter and The Goblet Of Fire',
      }]);
      done();
    });
  });
});
