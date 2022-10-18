const { Sequelize, Model } = require('sequelize');
const dotenv = require("dotenv").config();


module.exports = {
  up: async (queryInterface) => await queryInterface.bulkInsert('users', [
    {
      user_id: 0001,
      username: "Brad",
      user_email: "brthomiu@gmail.com",
      user_password: "not_encrypted_lol"
    },
    {
      user_id: 0002,
      username: "Evil_Brad",
      user_email: "stinkyfakeman@gmail.com",
      user_password: "not_encrypted_lol"
    },
  ], {})
};