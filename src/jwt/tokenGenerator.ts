import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/usersInterface';

export const secret: Secret = 'chocolate';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const generateToken = (payload: IUser) => jwt.sign({ payload }, secret, jwtConfig);

export const verifyToken = (token: string) => jwt.verify(token, secret);