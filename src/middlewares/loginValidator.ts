import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import http from './status';

class LoginValidator {
  schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

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

  validateClass = (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;
    const { noClass } = http;

    if (!classe) return res.status(noClass.status).json({ message: noClass.message });
    next();
  };

  validateLevel = (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;
    const { noLevel } = http;

    if (level === undefined) return res.status(noLevel.status).json({ message: noLevel.message });
    next();
  };

  fieldsValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.schema.validate(req.body);
  
    if (error) {
      error.stack = `${error.details[0].type}`;
      return res.status(422).json({ message: error.message });
    }
    next();
  };
}

export default LoginValidator;