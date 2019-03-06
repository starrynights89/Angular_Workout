import { Component, OnInit } from "@angular/core";
import { WorkoutPlan, ExercisePlan, Exercise } from "./model";

@Component({
  selector: "abe-workout-runner",
  templateUrl: "./workout-runner.component.html",
  styles: []
})
export class WorkoutRunnerComponent implements OnInit {
  constructor() {}

  workoutPlan: WorkoutPlan;
  restExercise: ExercisePlan;
  ngOnInit() {
    this.workoutPlan = this.buildWorkout();
    this.restExercise = new ExercisePlan(
      new Exercise("rest", "Relax!", "Relax a bit", "rest.png"),
      this.workoutPlan.restBetweenExercise
    );
  }
}
