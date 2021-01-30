// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import userController from '../controllers/UserController';

const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.index); // pegar todos usuários
router.get('/:id', userController.show); // pegar todos usuários
router.put('/:id', userController.update); // atualzação
router.delete('/:id', userController.delete); // atualzação

export default router; // app.js
