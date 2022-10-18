const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient_variables', {
    ingredient_variable_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ingredient_variable_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredient_variable_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredient_variable_value: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredient_variables',
    schema: 'items',
    timestamps: false
  });
};
