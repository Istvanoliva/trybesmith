import express from 'express';
import productsRouter from './products';
import usersRouter from './users';

const router = express();

router.use('/products', productsRouter);

router.use('/users', usersRouter);

export default router;