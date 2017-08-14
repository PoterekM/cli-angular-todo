import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework!';
  currentFocus: 'angular homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend homework'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];

  editTask() {
  alert("You just requested to edit a Task!");
  }
}

export class Task {
  public done: false;
  constructor(public description: string) { }
}
