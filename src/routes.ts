import * as e from 'express';

import * as dotenv from 'dotenv';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import AuthenticateController from './controllers/AuthenticateController';

dotenv.config();

const AUTH_DOMAIN: string | undefined = process.env.AUTH_DOMAIN;
const AUTH_AUDIENCE: string | undefined = process.env.AUTH_AUDIENCE;

const router: e.Router = e.Router();

const checkJwt: jwt.RequestHandler = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${AUTH_DOMAIN}/.well-known/jwks.json`
	}),
	audience: AUTH_AUDIENCE,
	issuer: `https://${AUTH_DOMAIN}/`,
	algorithms: ['RS256']
});

router.get('/verify', checkJwt, AuthenticateController);

export default router;
