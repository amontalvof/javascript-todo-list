import { Todo } from './todo.class';

export class TodoList {
    constructor() {
        this.getLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.setLocalStorage();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.setLocalStorage();
    }

    toggleTodo(id) {
        for (let todo of this.todos) {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                this.setLocalStorage();
                break;
            }
        }
    }

    deleteCompleted() {
        this.todos = this.todos.filter((todo) => !todo.completed);
        this.setLocalStorage();
    }

    setLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getLocalStorage() {
        this.todos = localStorage.getItem('todos')
            ? JSON.parse(localStorage.getItem('todos'))
            : [];
        this.todos = this.todos.map(Todo.fromJson);
    }
}
