import { IUser } from '../interfaces/usersInterface';
import { ILogin } from '../interfaces/loginInterface';

import connection from '../models/connection';
import UsersModel from '../models/usersModels';
import { generateToken } from '../jwt/tokenGenerator';
import http from '../middlewares/status';

class UserService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  createUser = async (user: IUser): Promise<string> => {
    const newUser = await this.model.createUser(user);
    const token = generateToken(newUser);
    return token;
  };

  findUser = async (user: ILogin): Promise<ILogin> => {
    const [find] = await this.model.findUser(user);
    
    if (!find) throw Object.assign(http.invalidUser);
    return find;
  };

  login = async (user: ILogin): Promise<string> => {
    const find = await this.findUser(user);
    const token = generateToken(find);
    return token;
  };
}

export default UserService;