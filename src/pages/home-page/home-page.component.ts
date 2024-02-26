import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Filter } from '../../models and enums/filter';
import { NgClass, NgForOf } from '@angular/common';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgClass, TodoComponent, NgForOf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  todosService = inject(TodoService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filters = this.todosService.filterSig();

    if (filters === Filter.To_do) {
      return todos.filter(todo => !todo.isCompleted);
    } else if (filters === Filter.Done) {
      return todos.filter(todo => todo.isCompleted);
    }
    return todos;
  });
  isAllTodosSelected = computed(() =>
    this.todosService.todosSig().every(todo => todo.isCompleted)
  );
  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos($event: Event): void {}
}
