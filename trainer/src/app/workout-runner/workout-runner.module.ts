import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkoutRunnerComponent } from "./workout-runner.component";

@NgModule({
  imports: [CommonModule],
  declarations: [WorkoutRunnerComponent],
  // export WorkoutRunnerComponent to allow AppComponent to locate component
  exports: [WorkoutRunnerComponent]
})
export class WorkoutRunnerModule {}
