import Sequelize, { Model } from 'sequelize';

const PROTECTED_ATTRIBUTES = [
  'created_at',
  'createdAt',
  'updated_at',
  'updatedAt',
];

class Tools extends Model {
  toJSON() {
    // hide protected fields
    const attributes = Object.assign({}, this.get());
    PROTECTED_ATTRIBUTES.map(attribute => delete attributes[attribute]);
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
        underscored: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tags, {
      through: 'tools_tags',
      as: 'tags',
    });
  }
}

export default Tools;
