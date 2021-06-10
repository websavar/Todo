import { addTodo, updateTodo, removeTodo, completeTodo } from './todoHelpers'
import { TodoInterface } from "../interfaces";

test('addTodo should add todo to the list', () => {
    const startTodos: TodoInterface[] = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false }
    ]

    const newTodo: TodoInterface = { id: '3', text: 'three', isCompleted: false }

    const expected = [
        { id: '3', text: 'three', isCompleted: false },
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false }
    ]

    const result = addTodo(newTodo, startTodos)

    expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
    const startTodos = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false }
    ]

    const newTodo: TodoInterface = { id: '3', text: 'three', isCompleted: false }

    const expected = [
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false },
        { id: '1', text: 'one', isCompleted: false }
    ]

    const result = addTodo(newTodo, startTodos)

    expect(result).not.toBe(startTodos)
})

test('updateTodo should update an item by id', () => {
    const startTodos: TodoInterface[] = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const updatedTodo = { id: '2', text: '2', isCompleted: false }

    const expectedTodo = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: '2', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const result = updateTodo(startTodos, '2', '2')

    expect(result).toEqual(expectedTodo)
})

test('updateTodo should not mutate the original array', () => {
    const startTodos = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const result = updateTodo(startTodos, '2', '2')

    expect(result).not.toBe(startTodos)
})

test('removeTodo should remove an item by id', () => {
    const startTodos: TodoInterface[] = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const expectedTodo = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const result = removeTodo(startTodos, '2')

    expect(result).toEqual(expectedTodo)
})

test('completeTodo should check existing todo item as completed by id', () => {
    const startTodos: TodoInterface[] = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: false }
    ]

    const expectedTodo = [
        { id: '1', text: 'one', isCompleted: false },
        { id: '2', text: 'two', isCompleted: false },
        { id: '3', text: 'three', isCompleted: true }
    ]

    const result = completeTodo(startTodos, '3')

    expect(result).toEqual(expectedTodo)
})
