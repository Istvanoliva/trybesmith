import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const products = new ProductsController();

productsRouter.post('/', products.create);

export default productsRouter;