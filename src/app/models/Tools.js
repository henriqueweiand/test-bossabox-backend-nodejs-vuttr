import Sequelize, { Model } from 'sequelize';

class Tools extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Tools;
