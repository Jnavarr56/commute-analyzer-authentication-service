// import * as  from 'express';

export interface TokenPayload {
	iss: string;
	sub: string;
	aud: string[];
	iat: number;
	exp: number;
	azp: string;
	scope: string;
}

declare global {
	namespace Express {
		export interface Request {
			user: undefined | TokenPayload;
		}
	}
}
