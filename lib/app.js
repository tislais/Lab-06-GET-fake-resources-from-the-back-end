// import dependencies
import express from 'express';
import cors from 'cors';
import creatures from '../data/creatures.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

// example route to see if app is alive!
app.get('/', (req, res) => {
  // send back a short response
  res.send('test thing');
});

// API routes for cats
app.get('/api/creatures', (req, res) => {
  res.json(creatures);
});

// API routes for cats
app.get('/api/creatures/1', (req, res) => {
  res.json(creatures[0]);
});

export default app;