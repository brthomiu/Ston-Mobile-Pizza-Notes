const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredients', {
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ingredient_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredient_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredient_variables: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredients',
    schema: 'items',
    timestamps: false
  });
};
