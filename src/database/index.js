import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';

const connection = new Sequelize(dbConfig);
Aluno.init(connection);

module.exports = connection;
