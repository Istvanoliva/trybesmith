import { Response, NextFunction } from 'express';
import { RequestUser, Payload } from '../interfaces/tokenInterface';
import { verifyToken } from '../jwt/tokenGenerator';
import http from './status';

const tokenValidator = (req: RequestUser, res: Response, next: NextFunction) => {
  const { noToken, invalidToken } = http;
  const token = req.headers.authorization;

  if (!token) return res.status(noToken.status).json({ message: noToken.message });

  try {
    const { payload } = verifyToken(token) as Payload;
    req.user = payload;
    next();
  } catch (error) {
    return res.status(invalidToken.status).json({ message: invalidToken.message });    
  }
};

export default tokenValidator;
