const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define(
    "Component",
    {
      // Model attributes are defined here
      component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      component_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      component_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      methods: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Components',
    }
  );
}

/*const Component = sequelize.define(
  "Component",
  {
    // Model attributes are defined here
    component_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    component_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    component_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    methods: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Component === sequelize.models.Component); // true

module.exports = Component;

*/
