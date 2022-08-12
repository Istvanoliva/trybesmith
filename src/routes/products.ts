import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const products = new ProductsController();

productsRouter.post('/', products.create);

productsRouter.get('/', products.getAll);

export default productsRouter;