# Cook.Book
### Mobile recipe tracking application.

Cook.Book is a platform built to help home cooks and chefs develop better recipes.

## Concept

Select the dish for a recipe.

Name and describe the recipe.

Create a goal for the recipe and add tags to the goal.

Select the ingredients and methods being used to create the recipe.

Set the parameters for every ingredient and method.

Tag ingredients and methods.

Update goal after cooking to add notes and declare recipe success/failure.

All recipe data is saved into a relational database.

Compare recipes and results with scientific precision.

## Tech Stack

Cook.Book is a mobile app built on a PERN stack with React Native and Expo.
It also features Sequelize as an ORM, Oauth2 authentication, and Redux Toolkit state management.

## Backend

Backend built with Node and Express API.
PostgreSQL database contains tables of dishes, ingredients, and methods that are used to build recipes.
Recipe objects from the user's state are modelled and mapped to recipes table in SQL with Sequelize ORM.

## Frontend

Frontend built with React Native and Expo. 
Uses Oauth authentication for Google login and Redux Toolkit for state management.
