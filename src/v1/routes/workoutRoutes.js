const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController.js");

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:workoutId", workoutController.getWorkoutById)
  .post("/:workoutId", workoutController.createWorkout)
  .patch("/:workoutId", workoutController.updateWorkout)
  .delete("/:workoutId", workoutController.deleteWorkout);
 
module.exports = router;