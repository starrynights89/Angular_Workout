import { Component, OnInit } from "@angular/core";
import { WorkoutPlan, ExercisePlan, Exercise } from "./model";

@Component({
  selector: "abe-workout-runner",
  // templateUrl: "./workout-runner.component.html",
  template: `
    <pre>Current Exercise: {{ currentExercise | json }}</pre>
    <pre>
Time Left: {{ currentExercise.duration - exerciseRunningDuration }}</pre
    >
  `,
  styles: []
})
export class WorkoutRunnerComponent implements OnInit {
  workoutPlan: WorkoutPlan;
  workoutTimeRemaining: number;
  restExercise: ExercisePlan;
  currentExerciseIndex: number;
  currentExercise: ExercisePlan;
  exerciseRunningDuration: number;

  constructor() {}

  ngOnInit() {
    this.workoutPlan = this.buildWorkout();
    this.restExercise = new ExercisePlan(
      new Exercise("rest", "Relax!", "Relax a bit", "rest.png"),
      this.workoutPlan.restBetweenExercise
    );
    this.start();
  }

  start() {
    this.workoutTimeRemaining = this.workoutPlan.totalWorkoutDuration();
    this.currentExerciseIndex = 0;
    this.startExercise(this.workoutPlan.exercises[this.currentExerciseIndex]);
  }

  startExercise(exercisePlan: ExercisePlan) {
    this.currentExercise = exercisePlan;
    this.exerciseRunningDuration = 0;
    const intervalId = setInterval(() => {
      if (this.exerciseRunningDuration >= this.currentExercise.duration) {
        clearInterval(intervalId);
      } else {
        this.exerciseRunningDuration++;
      }
    }, 1000);
  }

  buildWorkout(): WorkoutPlan {
    let workout = new WorkoutPlan("7MinWorkout", "7 Minute Workout", 10, []);
    workout.exercises.push(
      new ExercisePlan(
        new Exercise(
          "jumpingJacks",
          "Jumping Jacks",
          "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
          "JumpingJacks.png",
          "jumpingjacks.wav",
          `Assume an erect position, with feet together and 
               arms at your side. ...`,
          ["dmYwZH_BNd0", "BABOdJ-2Z6o", "c4DAnQ6DtF8"]
        ),
        30
      )
    );
    // (TRUNCATED) Other 11 workout exercise data.
    return workout;
  }
}
