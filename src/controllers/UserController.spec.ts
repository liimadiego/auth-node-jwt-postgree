// __tests__/controllers/userController.spec.ts

import { Request, Response } from 'express';
import UserController from './UserController';
import UserService from '../services/UserService';

jest.mock('..//services/UserService');

describe('UserController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
        const userData = {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            user_type: 1,
        };

        (UserService.prototype.createUser as jest.Mock).mockResolvedValue(userData);

        mockRequest.body = userData;

        await UserController.createUser(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({ user: userData });
    });

    it('should handle errors when creating a user', async () => {
        const errorMessage = 'Erro ao criar usuário';
        (UserService.prototype.createUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

        await UserController.createUser(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const userId = '1';
      const updatedUserData = {
        first_name: 'Updated',
        last_name: 'Name',
        email: 'updated.email@example.com',
        password: 'updatedPassword',
        user_type: 2,
      };

      (UserService.prototype.updateUser as jest.Mock).mockResolvedValue(updatedUserData);

      mockRequest.params = { id: userId };
      mockRequest.body = updatedUserData;

      await UserController.updateUser(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ user: updatedUserData });
    });

    it('should handle errors when updating a user', async () => {
      const userId = '2';
      const errorMessage = 'Erro ao atualizar usuário';
      (UserService.prototype.updateUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

      mockRequest.params = { id: userId };

      await UserController.updateUser(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('getUserById', () => {
    it('should get an existing user by ID', async () => {
      const userId = '1';
      const userData = {
        id: userId,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        user_type: 1,
      };

      (UserService.prototype.getUserById as jest.Mock).mockResolvedValue(userData);

      mockRequest.params = { id: userId };

      await UserController.getUserById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({ user: userData });
    });

    it('should handle errors when getting a user by ID', async () => {
      const userId = '2';
      const errorMessage = 'Usuário não encontrado';
      (UserService.prototype.getUserById as jest.Mock).mockResolvedValue(null);

      mockRequest.params = { id: userId };

      await UserController.getUserById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });

    it('should handle errors when getting a user', async () => {
      const userId = '2';
      const errorMessage = 'Erro ao encontrar usuário';
      (UserService.prototype.getUserById as jest.Mock).mockRejectedValue(new Error(errorMessage));

      mockRequest.params = { id: userId };

      await UserController.getUserById(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
