const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('components', {
    component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    component_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    methods: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'components',
    schema: 'objects',
    timestamps: false
  });
};
