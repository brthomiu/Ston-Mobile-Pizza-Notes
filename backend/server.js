const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:1337@localhost:5432/cookbookdb') // Example for postgres

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server running on port ${port}`));
