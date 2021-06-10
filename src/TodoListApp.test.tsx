import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './TodoListApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoListApp />, div);
});