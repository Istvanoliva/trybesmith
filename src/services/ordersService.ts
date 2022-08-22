import { IOrders } from '../interfaces/orders';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  getOrders = async (): Promise<IOrders[]> => {
    const orders = await this.model.getOrders();
    return orders;
  };

  create = async (id: number) => {
    const orderId = await this.model.create(id);
    return orderId;
  };
}

export default OrdersService;