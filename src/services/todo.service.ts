import { Injectable, signal } from '@angular/core';
import { Filter } from '../models and enums/filter';
import { Todo } from '../models and enums/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosSig = signal<Todo[]>([]);
  filterSig = signal<Filter[]>([Filter.All]);

  addTodo(text: string, id: string): void {
    const newTodo: Todo = {
      text,
      isCompleted: false,
      id,
    };
    this.todosSig.update(todos => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void {
    this.todosSig.update(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string) {
    this.todosSig.update(todos => todos.filter(todo => todo.id !== id));
  }

  toggleTodo(id: string) {
    this.todosSig.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean) {
    this.todosSig.update(todos =>
      todos.map(todo => ({ ...todo, isCompleted }))
    );
  }
}
