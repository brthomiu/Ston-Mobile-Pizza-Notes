const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dishes', {
    dish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dish_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    components: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    dish_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dishes',
    schema: 'objects',
    timestamps: false
  });
};
