// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Personnal sources
import indexRouter from './routes/index';

// Instanciate express app
const app = express();

// Implemente extensions
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
