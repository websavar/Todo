import React from "react";

import TodoItem from "./todo-item";

import { TodoListInterface } from "./../interfaces";

const TodoList = (props: TodoListInterface) => {
    const handleTodoStatus = (event: React.MouseEvent<HTMLElement>) => {
        const todoItemElement = (event.target as Element).parentElement?.parentElement?.parentElement;
        if (todoItemElement?.className === "completed") todoItemElement.className = "active";
        else if (todoItemElement?.className === "active") todoItemElement.className = "completed";
    }
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id} className="active">
                        <TodoItem
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoStatus={handleTodoStatus}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
