import Sequelize from 'sequelize';

import Tools from '../app/models/Tools';
import Tags from '../app/models/Tags';

import databaseConfig from '../config/database';

const models = [Tools, Tags];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
