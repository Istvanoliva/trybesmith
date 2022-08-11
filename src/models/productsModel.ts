import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/productsInterface';
import queries from './queries';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.insert, [name, amount]);
      
    const result = { id: insertId, ...product };
    return result;
  }
}

export default ProductModel;