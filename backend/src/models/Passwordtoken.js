import Sequelize, { Model } from 'sequelize';

export default class Passwordtoken extends Model {
  static init(sequelize) {
    super.init({
      used: {
        type: Sequelize.TINYINT,
      },
      token: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'user_id' });
  }
}
