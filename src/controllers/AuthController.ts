import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';
import User from '../models/User';

export class AuthController {
  private authenticateUserService: AuthenticateUserService;

  constructor() {
    this.authenticateUserService = new AuthenticateUserService();
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const { token } = await this.authenticateUserService.execute({ email, password });

      return res.json({ token }); 
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}
