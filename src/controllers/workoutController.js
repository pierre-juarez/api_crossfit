const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'Ok', data: allWorkouts});
}

const getWorkoutById = (req, res) => {
  const oneWorkout = workoutService.getWorkoutById(req.params.workoutId);
  res.send(`Get workout with id: ${req.params.workoutId}`);
}

const createWorkout = (req, res) => {
  const newWorkout = workoutService.createWorkout(req.params.workoutId);
  res.send(`Create workout with id: ${req.params.workoutId}`);
}

const updateWorkout = (req, res) => {
  const updatedWordkout = workoutService.updateWorkout(req.params.workoutId);
  res.send(`Update workout with id: ${req.params.workoutId}`);
}

const deleteWorkout = (req, res) => {
  workoutService.deleteWorkout(req.params.workoutId);
  res.send(`Delete workout with id: ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
};