const workout = require("../database/Workout.js");

const getAllWorkouts = () => { 
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts; 
};
const getWorkoutById = () => { 
  return; 
};
const createWorkout = () => { 
  return; 
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