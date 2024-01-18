const express = require('express');
const app = express();
const port = 3000;

// Express ºpp
app.get('/', (req, res) => {
  res.send('Connected to server');
});

// Listening for request
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
