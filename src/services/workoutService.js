const {v4: uuid} = require("uuid");
const workout = require("../database/Workout.js");

const getAllWorkouts = () => { 
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts; 
};

const getWorkoutById = (workoutid) => {
  const oneWorkout = workout.getWorkoutById(workoutid);
  return oneWorkout; 
};

const createWorkout = (newWorkout) => { 
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC" })
  }

  const createdWorkout = workout.createNewWorkout(workoutToInsert);
  return createdWorkout; 
};

const updateWorkout = (workoutId, changes) => {
  const updatedWorkout = workout.updateWorkout(workoutId, changes);
  return updatedWorkout; 
};

const deleteWorkout = (workoutId) => { 
  workout.deleteWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
}