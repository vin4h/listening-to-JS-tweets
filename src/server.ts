import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import appRoutes from './routes/index';

const port = process.env.port || 3333;

const server = express();

createServer(server);

server.use(cors());

server.use(express.json());

server.use(appRoutes);

server.listen(port);