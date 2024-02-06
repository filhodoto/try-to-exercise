const mongoose = require('mongoose');

// Create mongoose Schema
// https://mongoosejs.com/docs/guide.html#definition
const workoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true } // Adds timestamp when property is created/updated
);

// Create and export model
module.exports = mongoose.model('Workout', workoutSchema);
