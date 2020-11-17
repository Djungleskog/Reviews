// const app = require('/server/app.js');
// const request = require('request');

// describe('Testing Server Side Implementation', () => {
//   test('Send a GET request for reviews', function(done) {
//     request(app)
//       .get('/api/reviews')
//       .query({"product_id":" "})
//       .set('Accept','application/json')
//       .expect(200)
//       .expect(function(res) {

//         expect(JSON.parse(res.text)).toHaveLength(5)
//       })
//       .end(function(err,res) {
//         if (err) {return done(err);}
//         done();
//       })
//     }

//     );
// })