const uuidv1 = require('uuid/v1');
const repo = [{
  'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
  'author': 'J.K. Rowiling',
  'title': 'Harry Potter and The Goblet Of Fire',
}];
getBooks = () => {
  return Promise.resolve(repo);
};

addBook = (book) => {
  const generatedID = uuidv1();
  book.id = generatedID;
  repo.push({
    id: generatedID,
    title: book.title,
    author: book.author,
  });
  return Promise.resolve(book);
};

module.exports = { getBooks, addBook };
