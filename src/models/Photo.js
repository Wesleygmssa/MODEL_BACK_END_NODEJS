import { Model, DataTypes } from 'sequelize';

// criando model
class Photos extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    // this.belongsTo(models.Alunp, { foreignKey: 'aluno_id' });
  }
}

module.exports = Photos;
