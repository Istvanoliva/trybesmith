import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  productsIds: Joi.array()
    .items(Joi.number().required()).required()
    .messages({
      'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
    }),
});

const orderValidator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  
  if (error) {
    error.stack = `${error.details[0].type}`;
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }
  next();
};

export default orderValidator;