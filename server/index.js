// Require dotenv so we can access values in .env file
require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

// Middleware
app.use((req, res, next) => {
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  // without this we won't go to next get/post/etc request
  next();
});

// Express app
app.get('/', (req, res) => {
  res.send({ msg: 'Connected to server' });
});

// Listening for request
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
