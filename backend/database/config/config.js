const { Sequelize } = require('sequelize');
const dotenv = require("dotenv").config();
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL) // Example for postgres

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
  },
    seederStorage: 'sequelize'


}
