import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './src/routes/usuarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import utilserviceRoutes from "./src/routes/utilserviceRoutes";

dotenv.config();
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/user', usuarioRoutes);
    this.app.use('/aluno', alunoRoutes);
    this.app.use('/login', tokenRoutes);
    this.app.use("/gerarpdf",utilserviceRoutes);
  }
}

export default new App().app;
