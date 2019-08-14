const repo = [{
  'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
  'author': 'J.K. Rowiling',
  'title': 'Harry Potter and The Goblet Of Fire',
}];
getBooks = () => {
  return Promise.resolve(repo);
};

module.exports = { getBooks };
