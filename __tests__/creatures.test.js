import app from '../lib/app.js';
import supertest from 'supertest';
import creatureData from '../data/creatures.js';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/creatures', async () => {
  const expected = creatureData;

  const response = await request.get('/api/creatures');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});

it('GET /api/creatures/1', async () => {
  const expected = {
    url:
      'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    title: 'UniWhal',
    description: 'A unicorn and a narwhal nuzzling their horns',
    keyword: 'narwhal',
    horns: 1
  };

  const response = await request.get('/api/creatures/1');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});