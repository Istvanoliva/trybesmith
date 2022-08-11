import express from 'express';
import productsRouter from './products';

const router = express();

router.use('/products', productsRouter);

export default router;