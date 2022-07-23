 const {v4: uuid} = require("uuid");
const workout = require("../database/Workout.js");

const getAllWorkouts = () => { 
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts; 
};
const getWorkoutById = () => { 
  return; 
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
const updateWorkout = () => { 
  return; 
};
const deleteWorkout = () => { 
  return; 
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
}