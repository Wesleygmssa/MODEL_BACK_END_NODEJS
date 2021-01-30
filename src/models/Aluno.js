import { Model, DataTypes } from 'sequelize';

// criando model
class Alunos extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      peso: DataTypes.FLOAT,
      altura: DataTypes.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}

module.exports = Alunos;
