import { Router } from 'express';
import OrdersController from '../controllers/ordersControllers';

const ordersRouter = Router();

const orders = new OrdersController();

ordersRouter.get('/', orders.getOrders);

export default ordersRouter;