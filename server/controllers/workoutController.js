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
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Call service logic for delete
    const workout = await workoutService.deleteWorkout(id);
    return res.json(workout);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// UPDATE single workout by :id
router.patch('/:id', async (req, res) => {
  try {
    // Call service logic for create
    const workout = await workoutService.updateWorkout(req);
    return res.json(workout);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
