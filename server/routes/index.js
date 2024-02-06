const workoutController = require('../controllers/workoutController');

const createRoutes = (app) => {
  app.use('/api/workouts', workoutController);
};

module.exports = { createRoutes };
