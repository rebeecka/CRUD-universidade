import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email invalido',
          },
        },
      },

      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'cpf já existe',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo cpf deve ter entre 3 e 255 caracteres',
          },
        },
      },
      sexo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sexo deve ter entre 3 e 255 caracteres',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Endereco  deve ter entre 3 e 255 caracteres',
          },
        },
      },
      dataNascimento: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      curso: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Curso  deve ter entre 3 e 255 caracteres',
          },
        },
      },
      matricula: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        unique: {
          msg: 'Matricula é única!',
        },
      },
      turno: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Turno deve ter entre 3 e 255 caracteres',
          },
        },
      },

    }, {
      sequelize,
    });
  }
}
