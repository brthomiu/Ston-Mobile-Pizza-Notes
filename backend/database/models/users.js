const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_password: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'login',
    timestamps: false
  });
};
