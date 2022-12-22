import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Aluno from '../models/Aluno';
import Passwordtoken from '../models/Passwordtoken';

const models = [Usuario, Aluno, Passwordtoken];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
