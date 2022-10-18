const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient_tags', {
    ingredient_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ingredient_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredient_tags',
    schema: 'tags',
    timestamps: false
  });
};
