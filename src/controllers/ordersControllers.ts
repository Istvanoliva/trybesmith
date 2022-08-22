import { Request, Response, NextFunction } from 'express';
import { RequestUser } from '../interfaces/tokenInterface';
import { IUser } from '../interfaces/usersInterface';
import OrdersService from '../services/ordersService';
import ProductService from '../services/productsService';

class OrdersController {
  service: OrdersService;

  productService: ProductService;
  
  constructor() {
    this.service = new OrdersService();
    this.productService = new ProductService();
  }

  getOrders = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.service.getOrders();
      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: RequestUser, res: Response, next: NextFunction) => {
    const user = req.user as IUser;
    const { productsIds } = req.body;
    try {
      if (!user.id) throw new Error('Expired token');
      const orderId = await this.service.create(user.id);
      await this.productService.update(productsIds, orderId);
      res.status(201).json({ userId: user.id, productsIds }); 
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;