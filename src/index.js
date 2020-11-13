import express from 'express';
import http from 'http';

import { connectMongo, Routes, startServer, corsV2, seedData } from './startupfiles';

const app = express();
const server = http.createServer(app);

// start the server.
startServer(server);

// connect to mongo.
connectMongo();

corsV2(app);

// routing
Routes(app);

// seed data to db
seedData();
