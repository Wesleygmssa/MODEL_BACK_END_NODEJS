import dotenv from 'dotenv';

dotenv.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/home.routes';

class App {
  // quando a classs for inicanda iniciar o contructor
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // class ja estanciada //server.js
