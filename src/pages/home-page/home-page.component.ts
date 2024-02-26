import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Filter } from '../../models and enums/filter';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  todosService = inject(TodoService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === Filter.To_do) {
      return todos.filter(todo => !todo.isCompleted);
    } else if (filter === Filter.Done) {
      return todos.filter(todo => todo.isCompleted);
    }
    return todos;
  });

  objects = ['example1', 'example2', 'example3'];
}
