const express = require('express');

const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
  res.send({ msg: 'Get all workouts' });
});

module.exports = router;
