import UserRepository from '../repositories/UserRepository';
import User from '../models/User';

interface CreateUserDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: number;
}

interface UpdateUserDTO {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  user_type?: number;
}

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async createUser(data: CreateUserDTO): Promise<User> {
      const { first_name, last_name, email, password, user_type } = data;
      const user = await this.userRepository.create(first_name, last_name, email, password, user_type);
      return user;
  }  

  public async updateUser(data: UpdateUserDTO): Promise<User | null> {
    const { id, ...updateData } = data;
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }

    await user.update(updateData);
    return user;
  }

  public async deleteUser(id: string): Promise<void> {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await User.findByPk(id);
    return user;
  }
}

export default UserService;
