const express = require('express');
const workoutService = require('../services/workoutService');
const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.send({ msg: 'Get all workouts' });
});

// GET single workout by :id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({ msg: `GET workout with id ${id}` });
});

// POST a new workout by :id
router.post('/', async (req, res) => {
  const { id } = req.params;
  try {
    // Call service logic for create
    const workout = await workoutService.create(req.body);
    return res.json(workout);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// DELETE single workout by :id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send({ msg: `DELETE workout with id ${id}` });
});

// UPDATE single workout by :id
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.send({ msg: `UPDATE workout with id ${id}` });
});

module.exports = router;
