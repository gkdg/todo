import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../../Models/todos';
import { TODOS } from '../../../Models/todos-mock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todosArray: Todos[] = TODOS;
  newTask: string = '';
  doneTask = [];

  constructor() {}

  delete(todoToDelete: Todos): void {
    const indexNb: number = this.todosArray.indexOf(todoToDelete);
    this.todosArray.splice(indexNb, 1);
  }

  addTask(newtask: Todos) {
    if (this.newTask.length > 0) {
      this.todosArray.push({task: this.newTask, complete: false});
    } else {
    }
  }

  ngOnInit() {}
}
