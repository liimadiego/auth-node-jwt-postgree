import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    this.getUserById = this.getUserById.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).json({ user });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.userService.updateUser({ id, ...req.body });
      return res.status(200).json({ user });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  // public async deleteUser(req: Request, res: Response): Promise<Response> {
  //   try {
  //     const { id } = req.params;
  //     await this.userService.deleteUser(id);
  //     return res.status(204).end();
  // } catch (error: any) {
  //   return res.status(400).json({ error: error.message });
  // }
  // }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      if (user) {
        return res.status(200).json({ user });
      }
      
      return res.status(404).json({ error: 'Usuário não encontrado' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
