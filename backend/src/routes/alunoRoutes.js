import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginAuth from '../middlewares/loginAuth';

const router = Router();

router.get('/', alunoController.index);
router.get('/:id', loginAuth, alunoController.show);
router.put('/:id', loginAuth, alunoController.update);
router.post('/', loginAuth, alunoController.store);
router.delete('/:id', loginAuth, alunoController.delete);
router.get('/email/:parametro', alunoController.consultarPorEmail);
router.get('/nome/:nome', alunoController.consultarPorNome);
router.get('/cpf/:cpf', alunoController.consultarPorCpf);
router.get('/matricula/:matricula', alunoController.consultarPorMatricula);

export default router;
