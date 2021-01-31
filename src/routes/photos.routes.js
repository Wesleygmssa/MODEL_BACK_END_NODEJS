// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import photoController from '../controllers/PhotoController'; // modulos locais

const router = express.Router();

router.post('/', photoController.store);

export default router; // app.js
