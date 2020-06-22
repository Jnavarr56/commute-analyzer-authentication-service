import * as e from 'express';

const AuthenticateController = (req: e.Request, res: e.Response): void => {
	res.send((req as any).user);
};

export default AuthenticateController;
