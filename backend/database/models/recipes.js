const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipes', {
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    recipe_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dish: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goal_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goal_success: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    recipe_variables: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recipes',
    schema: 'objects',
    timestamps: false
  });
};
