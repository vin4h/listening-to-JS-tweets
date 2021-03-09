import { Router } from 'express';
import TwitteController from '../controller/TwitteController';

const twitteController = new TwitteController();

const tweetRouter = Router();

tweetRouter.get('/', async (request, response) => {
    try {
        await twitteController.getTwitte();

        return response.json({ message: "OK" });
    } catch (error) {
        return response.json({ error: error.message });
    }
});

export default tweetRouter;