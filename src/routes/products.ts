import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import ProductsValidator from '../middlewares/productsValidator';

const productsRouter = Router();

const products = new ProductsController();
const validator = new ProductsValidator();

productsRouter.post(
  '/',
  validator.checkName,
  validator.checkAmount,
  validator.fieldsValidator,
  products.create,
);

productsRouter.get('/', products.getAll);

export default productsRouter;