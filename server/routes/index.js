const workoutController = require('../controllers/workoutController');

const createRoutes = (app) => {
  app.use('/workouts', workoutController);
};

module.exports = { createRoutes };
