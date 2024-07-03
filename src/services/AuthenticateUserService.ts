import UserRepository from '../repositories/UserRepository';
import User from '../models/User';
import authConfig from '../config/auth';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

interface AuthenticateRequest {
  email: string;
  password: string;
}

interface AuthenticateResponse {
  token: string;
}

export class AuthenticateUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute({ email, password }: AuthenticateRequest): Promise<AuthenticateResponse> {
    try {
      const user = await UserRepository.findByEmail(email);

      if (!user) {
        throw new Error('Combinação email/senha incorreta.');
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        throw new Error('Combinação email/senha incorreta.');
      }

      const { secret, expiresIn } = authConfig.jwt;
      const token = sign({ 
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          userType: user.user_type,
        }
      }, secret, {
        expiresIn,
      });

      return {
        token,
      };
    } catch (error: any) {
      throw new Error(`Erro ao autenticar usuário: ${error.message}`);
    }
  }
}
