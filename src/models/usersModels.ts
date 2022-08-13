import { ResultSetHeader, Pool } from 'mysql2/promise';
import { IUser } from '../interfaces/usersInterface';
import queries from './queries';

class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  createUser = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;

    const [newUser] = await this.connection
      .execute<ResultSetHeader>(queries.newUser, [username, classe, level, password]);

    return { id: newUser.insertId, ...user };
  };
}

export default UsersModel;