import { TodoInterface } from "../interfaces";

export const addTodo = (todo: TodoInterface, todos: TodoInterface[]) => [todo, ...todos]

export const updateTodo = (todos: TodoInterface[], id: string, val: string) => {
    const newTodosState: TodoInterface[] = [...todos];

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = val
    return newTodosState
}

export const removeTodo = (todos: TodoInterface[], id: string) => {
    const newTodosState: TodoInterface[] = todos.filter(
        (todo: TodoInterface) => todo.id !== id
    );
    return newTodosState
}

export const completeTodo = (todos: TodoInterface[], id: string) => {
    const newTodosState: TodoInterface[] = [...todos];

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find(
        (todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find(
            (todo: TodoInterface) => todo.id === id
        )!.isCompleted;

    return newTodosState
}
