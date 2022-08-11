import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import { IProduct } from '../interfaces/productsInterface';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}

export default ProductService;