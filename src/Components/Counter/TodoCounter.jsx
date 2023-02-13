import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} To Do´s</h2>
    );
}

export { TodoCounter };