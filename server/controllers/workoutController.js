const express = require('express');
const workoutService = require('../services/workoutService');
const router = express.Router();
// TODO:: Find a way to remove all duplicated logic for these try/catch
// GET all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await workoutService.getAll();
    return res.json(workouts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// GET single workout by :id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await workoutService.getWorkout(id);
    return res.json(workout);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

// POST a new workout
router.post('/', async (req, res) => {
  try {
    // Call service logic for create
    const workout = await workoutService.create(req.body);
    return res.json(workout);
  } catch (err) {
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
