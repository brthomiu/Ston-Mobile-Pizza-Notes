var DataTypes = require("sequelize").DataTypes;
var _components = require("./components");
var _dishes = require("./dishes");
var _ingredient_tags = require("./ingredient_tags");
var _ingredient_variables = require("./ingredient_variables");
var _ingredients = require("./ingredients");
var _method_tags = require("./method_tags");
var _recipes = require("./recipes");
var _technique_variables = require("./technique_variables");
var _techniques = require("./techniques");
var _users = require("./users");

function initModels(sequelize) {
  var components = _components(sequelize, DataTypes);
  var dishes = _dishes(sequelize, DataTypes);
  var ingredient_tags = _ingredient_tags(sequelize, DataTypes);
  var ingredient_variables = _ingredient_variables(sequelize, DataTypes);
  var ingredients = _ingredients(sequelize, DataTypes);
  var method_tags = _method_tags(sequelize, DataTypes);
  var recipes = _recipes(sequelize, DataTypes);
  var technique_variables = _technique_variables(sequelize, DataTypes);
  var techniques = _techniques(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    components,
    dishes,
    ingredient_tags,
    ingredient_variables,
    ingredients,
    method_tags,
    recipes,
    technique_variables,
    techniques,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
