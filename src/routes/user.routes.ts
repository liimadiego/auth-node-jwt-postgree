import { Router } from 'express';
import UserController from '../controllers/UserController';
import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:id', auth, UserController.getUserById);
router.post('/', auth, UserController.createUser);
router.put('/:id', auth, UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);

export default router;