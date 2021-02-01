// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import photoController from '../controllers/PhotoController'; // modulos locais
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

router.post('/', loginRequired, photoController.store);

export default router; // app.js
