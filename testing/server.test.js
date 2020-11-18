const app = require('../server/app.js');
const supertest = require('supertest');
const request = supertest(app);

it('Should get the all products', async (done) => {
  const res = await request.get('/api/reviews');
  expect(res.body.length).toEqual(100);
  done();
});

