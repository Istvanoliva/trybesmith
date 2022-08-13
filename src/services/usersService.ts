import { IUser } from '../interfaces/usersInterface';
import connection from '../models/connection';
import UsersModel from '../models/usersModels';
import generateToken from '../jwt/tokenGenerator';

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
}

export default UserService;