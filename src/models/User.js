import { Model, DataTypes } from 'sequelize';
import bcryptjs from 'bcryptjs';

// criando model de users
class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracters',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        validade: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validade: {
          len: {
            args: [6, 50],
            msg: 'A senha  deve ter entre 6 e 50 caracters',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}

module.exports = User;
