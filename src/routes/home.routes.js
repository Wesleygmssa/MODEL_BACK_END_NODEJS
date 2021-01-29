// class e funcções contrutora inica com letra Maiuscula
import express from 'express';
import homeController from '../controllers/HomeController';

const router = express.Router();

router.get('/', homeController.index);

export default router; // app.js
