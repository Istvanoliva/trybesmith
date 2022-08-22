import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface RequestUser extends Request {
  user?: object,
}

export interface Payload extends JwtPayload {
  id?: number,
} 