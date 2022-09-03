const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status: 'Ok', data: allWorkouts});
}

const getWorkoutById = (req, res) => {
  const { params: {workoutId} } = req;
  if(!workoutId){ return; }
  const oneWorkout = workoutService.getWorkoutById(workoutId);
  res.send({status: 'OK', data: oneWorkout});
}

const createWorkout = (req, res) => {
  const { body } = req;

  if( 
      !body.name || 
      !body.mode || 
      !body.equipment || 
      !body.exercises || 
      !body.trainerTips 
    ) {
    rturn;
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
  const { body, params: { workoutId } } = req;
  if(!workoutId){ return; }
  const updatedWorkout = workoutService.updateWorkout(workoutId, body);
  res.send({ status: 'OK', data: updatedWorkout });
}

const deleteWorkout = (req, res) => {
  const { params: { workoutId } } = req;
  if(!workoutId){ return; }
  workoutService.deleteWorkout(workoutId);
  res.status(204).send({ status: 'OK', msg:'Workout deleted successfully' });
}

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
};