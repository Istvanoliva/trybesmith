import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;

    try {
      const newProduct = await this.service.createProduct({ name, amount });
      return res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAll = await this.service.getAll();
      return res.status(200).json(getAll);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;