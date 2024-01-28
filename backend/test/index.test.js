import app from '../index.js';  // Adjust path if necessary
import request from 'supertest';
import { expect } from 'chai';

describe('Server Tests', () => {
  
  describe('GET /', () => {
    it('should retrieve current time from PostgreSQL', (done) => {
      request(app)
        .get('/')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.include('Current time in PostgreSQL is:');
          done(err);
        });
    });
  });
  
  describe('GET /test', () => {
    it('should return test message', (done) => {
      request(app)
        .get('/test')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.text).to.equal('Hello! The team3 db is working');
          done(err);
        });
    });
  });

});
