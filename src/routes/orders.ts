import { Router } from 'express';
import OrdersController from '../controllers/ordersControllers';
import orderValidator from '../middlewares/orderValidator';
import tokenValidator from '../middlewares/tokenMiddleware';

const ordersRouter = Router();

const orders = new OrdersController();

ordersRouter.get('/', orders.getOrders);

ordersRouter.post('/', tokenValidator, orderValidator, orders.create);

export default ordersRouter;