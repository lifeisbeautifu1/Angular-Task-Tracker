import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { ITask } from 'src/app/types';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  deleteTask(task: ITask) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService
      .updateTaskReminder(task)
      .subscribe((data) => console.log(data));
  }

  addTask(task: ITask) {
    this.taskService.addTask(task).subscribe(() => this.tasks.push(task));
  }
}
