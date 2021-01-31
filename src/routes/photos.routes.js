// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController'; // modulos locais
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = express.Router();

router.post('/', upload.single('photo'), photoController.store);

export default router; // app.js
