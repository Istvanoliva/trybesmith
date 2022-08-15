import { Router } from 'express';
import UsersController from '../controllers/usersController';
import LoginValidator from '../middlewares/loginValidator';

const loginRouter = Router();

const login = new UsersController();
const validator = new LoginValidator();

loginRouter.post(
  '/',
  validator.validateUsername,
  validator.validatePassword,
  login.login,
);

export default loginRouter;