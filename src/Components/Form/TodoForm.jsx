import React from 'react';
import { TodoContext } from '../Context/TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Enter your new task:</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Write your task"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };