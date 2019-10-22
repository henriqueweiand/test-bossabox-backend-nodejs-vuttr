import Sequelize, { Model } from 'sequelize';

const PROTECTED_ATTRIBUTES = [
  'created_at',
  'createdAt',
  'updated_at',
  'updatedAt',
];

class Tags extends Model {
  toJSON() {
    // hide protected fields
    const attributes = Object.assign({}, this.get());
    PROTECTED_ATTRIBUTES.map(attribute => delete attributes[attribute]);
    return attributes;
  }

  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        tableName: 'tags',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tools, {
      through: 'tools_tags',
      as: 'tools',
    });
  }
}

export default Tags;
