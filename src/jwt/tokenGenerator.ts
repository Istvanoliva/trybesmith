import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/usersInterface';

const secret: Secret = 'chocolate';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload: IUser) => {
  const token = jwt.sign({ payload }, secret, jwtConfig);
  return token;
};

export default generateToken;