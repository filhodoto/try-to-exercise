// This will have some logic
const WorkoutModel = require('../models/workoutModel');

// Create a workout in db
const create = async (body) => {
  const { title, reps, load } = body;

  const workout = await WorkoutModel.create({ title, reps, load });

  return workout;
};

// Get all a workouts
const getAll = async () => {
  // Find all workouts and retrieve them by creation date
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

  return workouts;
};

module.exports = { create, getAll };
