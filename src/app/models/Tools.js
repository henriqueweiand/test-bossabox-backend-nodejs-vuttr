import Sequelize, { Model } from 'sequelize';

const PROTECTED_ATTRIBUTES = ['created_at', 'updated_at'];

class Tools extends Model {
  toJSON() {
    // hide protected fields
    const attributes = Object.assign({}, this.get());
    for (const a of PROTECTED_ATTRIBUTES) {
      delete attributes[a];
    }
    return attributes;
  }

  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        link: Sequelize.STRING,
        description: Sequelize.STRING,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tags, {
      through: 'tools_tags',
      'foreign-key': 'tools_id',
      as: 'ToolsTags',
    });
  }
}

export default Tools;
