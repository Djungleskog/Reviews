const app = require('../server/app.js').app;
const request = require('supertest');

describe('Testing API from server', () => {
  test('Send get request of reviews', function(done) {
    request(app)
      .get('/api-reviews')
      .query({"product_id":"a8dcf1ef-b586-4a6b-8014-d14859fa466a"})
      .set('Accept','application/json')
      .expect(200)
      .expect(function(res) {

        expect(JSON.parse(res.author)).toEqual('Kenny Becker')
      })
      .end(function(err,res) {
        if (err) {return done(err);}
        done();
      })
    }

    );
})