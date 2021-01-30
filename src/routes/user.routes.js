// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.post('/', userController.create);
router.get('/', loginRequired, userController.index); // pegar todos usuários
router.get('/:id', loginRequired, userController.show); // pegar usuário especifico
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router; // app.js
