// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

// não deveria existir
// router.get('/', userController.index); // pegar todos usuários
// router.get('/:id', userController.show); // pegar usuário especifico

// reais
router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router; // app.js
