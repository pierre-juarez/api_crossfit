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
  const { body } = req;

  if( !body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }
  
  const createWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).send({status: 'Ok', data: createWorkout});
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