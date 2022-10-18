const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('technique_variables', {
    technique_variable_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    technique_variable_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    technique_variable_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    technique_variable_value: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'technique_variables',
    schema: 'items',
    timestamps: false
  });
};
