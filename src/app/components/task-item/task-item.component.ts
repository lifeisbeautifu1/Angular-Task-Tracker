import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ITask } from 'src/app/types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;

  @Output() onDeleteTask = new EventEmitter<ITask>();

  @Output() onToggleReminder = new EventEmitter<ITask>();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: ITask) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: ITask) {
    this.onToggleReminder.emit(task);
  }
}
