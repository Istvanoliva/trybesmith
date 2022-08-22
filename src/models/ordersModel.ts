import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrders } from '../interfaces/orders';
import queries from './queries';

class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  getOrders = async (): Promise<IOrders[]> => {
    const [orders] = await this.connection.execute(queries.getOrders);
    return orders as IOrders[];
  };

  create = async (id: number): Promise<number> => {
    const result = await this.connection.query<ResultSetHeader>(queries.newOrder, [id]);
    const [{ insertId }] = result;
    return insertId;
  };
}

export default OrdersModel;