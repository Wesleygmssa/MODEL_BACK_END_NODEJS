// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import userController from '../controllers/UserController';

const router = express.Router();

router.post('/', userController.create);

export default router; // app.js
