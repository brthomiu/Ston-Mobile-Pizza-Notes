const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('techniques', {
    technique_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    technique_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    technique_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    technique_variables: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'techniques',
    schema: 'items',
    timestamps: false
  });
};
