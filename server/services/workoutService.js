// This will have some logic
const mongoose = require('mongoose');
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
// TODO:: Find a way to keep logic in services but be abel to set error codes (404/500/etc)
const getWorkout = async (id) => {
  // Check if id is a valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id)) throw Error('No workout found');

  const workout = await WorkoutModel.findById(id);

  // If no workout found, throw error
  if (!workout) throw Error('No workout found');

  return workout;
};

module.exports = { create, getAll, getWorkout };
