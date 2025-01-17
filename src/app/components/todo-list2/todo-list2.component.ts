import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component {

  todos$: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void{
    this.todos$ = this.todoService.todoObs;
    console.log(this.todos$);
  }

  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
  toggleTodo(id: number) {
    this.todoService.toggle(id);
  }
}
