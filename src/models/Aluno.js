import { Model, DataTypes } from 'sequelize';

// criando model
class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracters',
          },
        },
      },
      sobrenome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracters',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já cadastrado!',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser número inteiro',
          },
        },
      },
      peso: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser número inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}

module.exports = Aluno;

// import { Model, DataTypes } from 'sequelize';

// // criando model
// class Alunos extends Model {
//   static init(sequelize) {
//     super.init({
//       nome: DataTypes.STRING,
//       sobrenome: DataTypes.STRING,
//       email: {
//         type: DataTypes.STRING,
//         defaultValue: '',
//         unique: {
//           msg: 'E-mail já cadastrado!',
//         },
//         validate: {
//           isEmail: {
//             msg: 'E-mail inválido',
//           },
//         },
//       },
//       idade: DataTypes.INTEGER,
//       peso: DataTypes.FLOAT,
//       altura: DataTypes.FLOAT,
//     }, {
//       sequelize,
//     });
//     return this;
//   }
// }

// module.exports = Alunos;
/* ============================================================ */
// import { Model, DataTypes } from 'sequelize';

// // criando model
// class Alunos extends Model {
//   static init(sequelize) {
//     super.init({
//       nome: {
//         type: DataTypes.STRING,
//         defaultValue: '',
//         validate: {
//           len: {
//             args: [3, 255],
//             msg: 'Nome precisa ter entre 3 e 255 caracters',
//           },
//         },
//       },
//       sobrenome: {
//         type: DataTypes.STRING,
//         defaultValue: '',
//         validate: {
//           len: {
//             args: [3, 255],
//             msg: 'Sobrenome precisa ter entre 3 e 255 caracters',
//           },
//         },
//       },
//       email: {
//         type: DataTypes.STRING,
//         defaultValue: '',
//         unique: {
//           msg: 'E-mail já cadastrado!',
//         },
//         validate: {
//           isEmail: {
//             msg: 'E-mail inválido',
//           },
//         },
//       },
//       idade: {
//         type: DataTypes.INTEGER,
//         defaultValue: '',
//         validate: {
//           isInt: {
//             msg: 'Idade precisa ser número inteiro',
//           },
//         },
//       },
//       peso: {
//         type: DataTypes.FLOAT,
//         defaultValue: '',
//         validate: {
//           isInt: {
//             msg: 'E-mail inválido',
//           },
//         },
//       },
//       altura: {
//         type: DataTypes.FLOAT,
//         defaultValue: '',
//         validate: {
//           isInt: {
//             args: [3, 255],
//             msg: 'Sobrenome precisa ter entre 3 e 255 caracters',
//           },
//         },
//       },
//     }, {
//       sequelize,
//     });
//     return this;
//   }
// }

// module.exports = Alunos;
