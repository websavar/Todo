import * as React from "react";

import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

import { addTodo, updateTodo, removeTodo, completeTodo } from './lib/todoHelpers';

import { TodoInterface } from "./interfaces";

import "./styles.scss";

const TodoListApp = () => {
    const [todos, setTodos] = React.useState<TodoInterface[]>([]);

    function handleTodoSize(todo: any) {
        const buttons = document.querySelector('.buttons');

        if (todo.length === 0) buttons?.classList.add('empty');
        else buttons?.classList.remove('empty');
    }

    function handleTodoCreate(todo: TodoInterface) {
        const newTodosState = addTodo(todo, todos);

        setTodos(newTodosState);
        handleTodoSize(newTodosState);
    }

    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const newTodosState = updateTodo(todos, id, event.target.value);

        setTodos(newTodosState);
    }

    function handleTodoRemove(id: string) {
        const newTodosState = removeTodo(todos, id);

        setTodos(newTodosState);
        handleTodoSize(newTodosState);
    }

    // Check existing todo item as completed
    function handleTodoComplete(id: string) {
        const newTodosState = completeTodo(todos, id);

        setTodos(newTodosState);
    }

    // Check if todo item has title
    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add("todo-input-error");
        } else {
            event.target.classList.remove("todo-input-error");
        }
    }

    return (
        <div className="todo-list-app">
            <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />

            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoRemove={handleTodoRemove}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    );
};
export default TodoListApp;