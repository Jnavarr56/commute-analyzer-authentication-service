import express, { Application } from 'express';

import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app: Application = express();

let allowedOrigin: string;
if (process.env.NODE_ENV === 'production') {
	if (!process.env.CLIENT_ORIGIN) {
		throw new Error('Missing Client Origin');
	}
	allowedOrigin = process.env.CLIENT_ORIGIN;
} else {
	allowedOrigin = '*';
}

const corsOpts: CorsOptions = {
	credentials: true,
	origin: allowedOrigin,
	allowedHeaders: [
		'Access-Control-Allow-Credentials',
		'Authorization',
		'Content-Type'
	]
};

app.use(bodyParser.json()).use(morgan('dev')).use(cors(corsOpts));

app.options('*', cors(corsOpts));

const PATHNAME_PREFIX: string | undefined = process.env.PATHNAME_PREFIX;
if (!PATHNAME_PREFIX) {
	throw new Error('Missing Pathname Prefix');
}

app.use(PATHNAME_PREFIX, routes);

export default app;
