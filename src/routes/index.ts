import { Router } from 'express';
import tweetRouter from './tweet.routes';

const app = Router();

app.use('/api/v1/tweets/',tweetRouter);

export default app;