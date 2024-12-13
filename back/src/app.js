import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
dotenv.config();

export const app = express();
app.use(cors());
app.use(json());

/**
 * Routes for the challenge
 */

// GET /ping
app.get('/ping', (req, res) => {
  res.json({
    "message": 'pong',
  });
});