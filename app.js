import dotenv from 'dotenv';
import { resolve } from 'path';
import './src/database';

dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import homeRoutes from './src/routes/home.routes';
import userRoutes from './src/routes/user.routes';
import tokenRoutes from './src/routes/token.routes';
import alunoRoutes from './src/routes/aluno.routes';
import photoRoutes from './src/routes/photos.routes';

const whiteLis = [
  'https://react2.otaviomiranda.com.br',
  'http://localhost:3333',
];
const corsOptions = {
  origin(origin, callback) {
    if (whiteLis.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
class App {
  // iniciar o contructor
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/photos', photoRoutes);
  }
}

export default new App().app; // class ja estanciada //server.js
