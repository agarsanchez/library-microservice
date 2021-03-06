process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /GET route
  */

describe('Books', () => {
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
        .get('/book')
        .set('Content-Type', 'application/json')
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

    it('it should GET a single book', (done) => {
      chai.request(server)
        .get('/book/d92d6a55-d808-48db-9faf-64246484ae2c')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.eql([{
            'id': 'd92d6a55-d808-48db-9faf-64246484ae2c',
            'author': 'J.K. Rowiling',
            'title': 'Harry Potter and The Goblet Of Fire',
          }]);
          done();
        });
    });
  });

  describe('/POST book', () => {
    it('it should POST a book', (done) => {
      chai.request(server)
        .post('/book')
        .set('Content-Type', 'application/json')
        .send({
          'author': 'J.K. Rowiling',
          'title': 'Harry Potter and The Half-Blooded Prince',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('/OPTIONS book', () => {

    it('it should return all book options available', (done) => {
      chai.request(server)
        .options('/book')
        .set('Content-Type', 'application/json')
        .send()
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.header('Allow', 'GET,HEAD,POST');
          done();
        });
    });
  });
});
