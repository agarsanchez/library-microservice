process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {
  /*
    * Test the /GET route
    */
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
        .get('/book')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          res.body.should.be.eql([{
            'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
            'author': 'J.K. Rowiling',
            'title': 'Harry Potter and The Goblet Of Fire',
          }]);
          done();
        });
    });
  });

});
