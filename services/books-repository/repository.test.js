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

  test('should return a single book', (done) => {
    repo.getBook('d92d6a55-d808-48db-9faf-64246484ae2c').then((book) => {
      expect(book).toEqual([{
        'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
        'author': 'J.K. Rowiling',
        'title': 'Harry Potter and The Goblet Of Fire',
      }]);
      done();
    });
  });

  test('should store a book', (done) => {

    repo.addBook({
      'author': 'J.K. Rowiling',
      'title': 'Harry Potter and The Half-Blooded Prince',
    }).then((book) => {
      expect(book.author).toEqual('J.K. Rowiling');
      expect(book.title).toEqual('Harry Potter and The Half-Blooded Prince');
      expect(book).toHaveProperty('id');

      repo.getBooks().then((books) => {
        storedBook = books.filter(((b) => { return b.id === book.id; }))[0];
        expect(storedBook.author).toEqual('J.K. Rowiling');
        expect(storedBook.title).toEqual('Harry Potter and The Half-Blooded Prince');
        done();
      });
    });
  });
});
