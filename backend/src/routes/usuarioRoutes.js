import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginAuth from '../middlewares/loginAuth';

const router = new Router();

router.get('/', loginAuth, usuarioController.index);
router.get('/:id', loginAuth, usuarioController.show);
router.put('/:id', loginAuth, usuarioController.update);
router.post('/', usuarioController.store);
router.delete('/:id', loginAuth, usuarioController.delete);
router.post('/recover', usuarioController.recoverPassword);
router.post('/changepassword', usuarioController.changePassword);
router.post('/login', usuarioController.login);

export default router;
