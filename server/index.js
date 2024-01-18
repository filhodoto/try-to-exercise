// Require dotenv so we can access values in .env file
require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

// Express app
app.get('/', (req, res) => {
  res.send({ msg: 'Connected to server' });
});

// Listening for request
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
