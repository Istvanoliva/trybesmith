import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  service: OrdersService;
  
  constructor() {
    this.service = new OrdersService();
  }

  getOrders = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.service.getOrders();
      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;