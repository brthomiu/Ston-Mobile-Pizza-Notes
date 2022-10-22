const express = require("express");
const dotenv = require("dotenv").config({ path: "../.env" });
const port = process.env.PORT || 5000;
const { sequelize } = require("./database/models/index");

//Start server on port 5000
const app = express();

//Ping database
const pingDb = async () => {
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

pingDb();

//Sync models to DB
const syncDb = async () => {
  try {
    sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize models:", error);
  }
};

syncDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server running on port ${port}`));
