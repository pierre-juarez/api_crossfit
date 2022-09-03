const DB = require("./db.json");
const { saveToDatabase } = require("./util");

const getAllWorkouts = () => {
  return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(
        (workout) => workout.name === newWorkout.name
      ) > -1;
  if (isAlreadyAdded) { return; }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
}

const getWorkoutById = (workoutId) =>{
  const oneWorkout = DB.workouts.find((workout) => workout.id === workoutId);
  if(!oneWorkout){ return; }
  return oneWorkout;
}

const updateWorkout = (workoutId, changes) => {
  const indexForUpdated = DB.workouts.findIndex((workout) => workout.id === workoutId);
  if(indexForUpdated === -1){ return; }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  }
  
  DB.workouts[indexForUpdated] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
}

const deleteWorkout = (workoutId) => {
  const indexForDeleted = DB.workouts.findIndex((workout) => workout.id === workoutId);
  if(indexForDeleted === -1){ return; }
  DB.workouts.splice(indexForDeleted,1);
  saveToDatabase(DB);
}

module.exports = { 
  getAllWorkouts, 
  createNewWorkout, 
  getWorkoutById, 
  updateWorkout,
  deleteWorkout
};