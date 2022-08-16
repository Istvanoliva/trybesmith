import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import http from './status';

class ProductsValidator {
  schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  checkName = (req: Request, res: Response, next: NextFunction) => {
    const { noName } = http;
    const { name } = req.body;

    if (!name) return res.status(noName.status).json({ message: noName.message });
    next();
  };

  checkAmount = (req: Request, res: Response, next: NextFunction) => {
    const { noAmount } = http;
    const { amount } = req.body;

    if (!amount) return res.status(noAmount.status).json({ message: noAmount.message });
    next();
  };
  
  fieldsValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.schema.validate(req.body);
  
    if (error && error.details[0].type.includes('string')) {
      return res.status(422).json({ message: error.message });
    }
    next();
  };
}

export default ProductsValidator;