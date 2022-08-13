import { Request, Response, NextFunction } from 'express';
import UserService from '../services/usersService';

class UsersController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.service.createUser(req.body);
      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;