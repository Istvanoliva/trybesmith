import { Router } from 'express';
import UserController from '../controllers/usersController';
import LoginValidator from '../middlewares/loginValidator';

const usersRouter = Router();

const users = new UserController();
const validation = new LoginValidator();

usersRouter.post(
  '/',
  validation.validateUsername,
  validation.validatePassword,
  validation.validateClass,
  validation.validateLevel,
  validation.fieldsValidator,
  users.createUser,
);

export default usersRouter;