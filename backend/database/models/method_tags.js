const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('method_tags', {
    method_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    method_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'method_tags',
    schema: 'tags',
    timestamps: false,
    indexes: [
      {
        name: "method_tags_pkey",
        unique: true,
        fields: [
          { name: "method_tag_id" },
        ]
      },
    ]
  });
};
