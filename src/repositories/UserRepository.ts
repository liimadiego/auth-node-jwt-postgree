// src/repositories/UserRepository.ts
import User from '../models/User';

class UserRepository {
  public static async findByEmail(email: string): Promise<User | null> {
    return User.findOne({
      where: { email },
    });
  }

  public async create(
    first_name: string, 
    last_name: string, 
    email: string, 
    password: string,
    user_type: number
  ): Promise<User> {
    return User.create({ first_name, last_name, email, password, user_type });
  }
}

export default UserRepository;
