import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(private todoService: TodoService) {}

  addNewTodo(todoText: any) {
    this.todoService.create({ text: todoText });
  }
}
