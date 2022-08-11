import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../interfaces/errorInterface';

const errorMiddleware = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
};

export default errorMiddleware;