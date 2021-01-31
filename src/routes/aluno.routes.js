// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.get('/:id', alunoController.show);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router; // app.js
