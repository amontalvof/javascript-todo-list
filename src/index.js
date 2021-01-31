import './styles.css';
import { TodoList } from './classes';
import { createTodoHtml, countTodosCompleted } from './js/components';

export const todoList = new TodoList();
todoList.todos.forEach(createTodoHtml);
countTodosCompleted();
