import React from 'react';
import ReactDOM from 'react-dom';

import TodoListApp from './TodoListApp';

import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoListApp />, rootElement);

registerServiceWorker();