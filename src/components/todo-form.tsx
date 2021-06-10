import * as React from "react";
import shortid from "shortid";

import { TodoInterface, TodoFormInterface } from "./../interfaces";

const TodoForm = (props: TodoFormInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [formState, setFormState] = React.useState("");
    const appList = document.querySelector('.todo-list-app');

    React.useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value);
    }

    function OnActiveButtonClick() {
        appList?.classList.add('active');
        appList?.classList.remove('completed');
    }

    function OnCompleteButtonClick() {
        appList?.classList.add('completed');
        appList?.classList.remove('active');
    }

    function OnAllButtonClick() {
        appList?.classList.add('all');
        appList?.classList.remove('completed');
        appList?.classList.remove('active');
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            if (inputRef.current?.value === "") return;
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            };

            props.handleTodoCreate(newTodo);

            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }

    return (
        <div className="todo-form">
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter new todo"
                onChange={(event) => handleInputChange(event)}
                onKeyPress={(event) => handleInputEnter(event)}
            />
            <div className="buttons empty">
                <button
                    type="button"
                    onClick={() => OnActiveButtonClick()}
                >Active
                </button>
                <button
                    type="button"
                    onClick={() => OnCompleteButtonClick()}
                >Completed
                </button>
                <button
                    type="button"
                    onClick={() => OnAllButtonClick()}
                >All
                </button>
            </div>
        </div>
    );
};

export default TodoForm;
