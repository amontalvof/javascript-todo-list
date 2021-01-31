import { Todo } from '../classes';
import { todoList } from '../index';

// HTML References
const ulTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnClearCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorsFilter = document.querySelectorAll('.filter');
const spanCount = document.querySelector('.todo-count');

export const createTodoHtml = (todo) => {
    const htmlTodo = `
    <li ${todo.completed ? 'class="completed"' : ''} data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${
                todo.completed ? 'checked' : ''
            }>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    ulTodoList.append(div.firstElementChild);
    return div.firstElementChild;
};

// Events
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new Todo(txtInput.value);
        todoList.newTodo(newTodo);
        createTodoHtml(newTodo);
        txtInput.value = '';
    }
    countTodosCompleted();
});

ulTodoList.addEventListener('click', (event) => {
    const nameElement = event.target.localName; // input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');
    if (nameElement.includes('input')) {
        todoList.toggleTodo(todoId);
        todoElement.classList.toggle('completed');
    } else if (nameElement.includes('button')) {
        todoList.deleteTodo(todoId);
        ulTodoList.removeChild(todoElement);
    }
    countTodosCompleted();
});

btnClearCompleted.addEventListener('click', () => {
    todoList.deleteCompleted();
    for (let i = ulTodoList.children.length - 1; i >= 0; i--) {
        const element = ulTodoList.children[i];
        if (element.classList.contains('completed')) {
            ulTodoList.removeChild(element);
        }
    }
    countTodosCompleted();
});

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if (!filter) {
        return;
    }

    anchorsFilter.forEach((elem) => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const element of ulTodoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch (filter) {
            case 'Active':
                if (completed) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completed':
                if (!completed) {
                    element.classList.add('hidden');
                }
                break;
            default:
                break;
        }
    }
});

export const countTodosCompleted = () => {
    let counter = 0;
    spanCount.innerText = '';
    for (let index = 0; index < todoList.todos.length; index++) {
        const element = todoList.todos[index];
        if (!element.completed) {
            counter++;
        }
    }
    if (counter >= 0 && counter === 1) {
        spanCount.innerText = `${counter} item left`;
    } else if (counter >= 0) {
        spanCount.innerText = `${counter} items left`;
    }
};
