import { Request, Response, NextFunction } from 'express';
import http from './status';

class LoginValidator {
  validateUsername = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    const { noUser } = http;
    if (!username) return res.status(noUser.status).json({ message: noUser.message });
    next();
  };

  validatePassword = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const { noPass } = http;

    if (!password) return res.status(noPass.status).json({ message: noPass.message });
    next();
  };
}

export default LoginValidator;