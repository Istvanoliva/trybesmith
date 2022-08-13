import { Router } from 'express';
import UserController from '../controllers/usersController';

const usersRouter = Router();

const users = new UserController();

usersRouter.post('/', users.createUser);

export default usersRouter;