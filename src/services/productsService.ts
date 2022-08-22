import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import { IProduct } from '../interfaces/productsInterface';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  createProduct = async (product: IProduct): Promise<IProduct> => {
    const newProduct = await this.model.create(product);
    return newProduct;
  };

  getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  update = async (productsIds: number[], orderId: number) => {
    await this.model.update(productsIds, orderId);
  };
}

export default ProductService;