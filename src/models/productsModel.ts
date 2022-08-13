import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/productsInterface';
import queries from './queries';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.newProduct, [name, amount]);
      
    const result = { id: insertId, ...product };
    return result;
  };

  getAll = async (): Promise<IProduct[]> => {
    const [products] = await this.connection
      .execute(queries.getAllProducts);
    return products as IProduct[];
  };
}

export default ProductModel;