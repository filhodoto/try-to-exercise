// This will have some logic
const WorkoutModel = require('../models/workoutModel');

const create = async (body) => {
  const { title, reps, load } = body;

  const workout = await WorkoutModel.create({ title, reps, load });

  return workout;
};

module.exports = { create };
