// Require dotenv so we can access values in .env file
require('dotenv').config();
const { createRoutes } = require('./routes');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;
const dbURL = process.env.DATABASE_URL;

// Middleware
app.use((req, res, next) => {
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  // without this we won't go to next get/post/etc request
  next();
});

// Make sure the "body" post is parsed into req.body
// https://expressjs.com/en/api.html#req.body
app.use(express.json());

// Create routes
createRoutes(app);

// Connect to DB
// Note:: Check if current up address is whitelisted in Mongoose Atlas
mongoose
  .connect(dbURL)
  .then(() => {
    console.log('Connected to db >>>');

    // Listening for request
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to db >>> ', err);
  });
