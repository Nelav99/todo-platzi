import {React, useState, createContext} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [search, setSearch] = useState("");

    const [openModal, setOpenModal ] = useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!search.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = search.toLocaleLowerCase();
        return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            setSearch,
            completedTodos,
            totalTodos,
            search,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

<TodoContext.Consumer></TodoContext.Consumer>
export { TodoContext, TodoProvider};
