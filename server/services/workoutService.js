// This will have some logic
const mongoose = require('mongoose');
const WorkoutModel = require('../models/workoutModel');

const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

// Create a workout in db
const create = async (body) => {
  const { title, reps, load } = body;

  const workout = await WorkoutModel.create({ title, reps, load });

  // If no workout found, throw error
  if (!workout) throw Error('Workout could not be created');

  return workout;
};

// Get all a workouts
const getAll = async () => {
  // Find all workouts and retrieve them by creation date
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

  return workouts;
};

// TODO:: Find a way to keep logic in services but be able to set error codes (404/500/etc)
const getWorkout = async (id) => {
  // Check if id is a valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id)) throw Error('No workout found');

  const workout = await WorkoutModel.findById(id);

  // If no workout found, throw error
  if (!workout) throw Error('No workout found');

  return workout;
};

const deleteWorkout = async (id) => {
  // Check if id is a valid mongoose type
  if (!mongoose.Types.ObjectId.isValid(id))
    throw Error('Workout id is not valid');

  const workout = await WorkoutModel.findOneAndDelete({ _id: id });

  // If no workout found, throw error
  if (!workout) throw Error('No workout found');

  return workout;
};

// Create a workout in db
const updateWorkout = async (req) => {
  const { id } = req.params;

  // Check if there are values that need to be updated
  if (isObjectEmpty(req.body)) throw Error('No new values to be updated');

  const workout = await WorkoutModel.findOneAndUpdate(
    { _id: id },
    { ...req.body } // destructuring body will set all elements passed { title, reps, load }
  );

  // If no workout found, throw error
  if (!workout) throw Error('No workout found');

  return workout;
};

module.exports = { create, getAll, getWorkout, deleteWorkout, updateWorkout };
