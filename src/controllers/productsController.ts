import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  productService: ProductsService;

  constructor() {
    this.productService = new ProductsService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;

    try {
      const newProduct = await this.productService.createProduct({ name, amount });
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAll = await this.productService.getAll();
      return res.status(200).json(getAll);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;