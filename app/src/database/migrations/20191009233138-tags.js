module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tags', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Timestamps
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tags');
  },
};
