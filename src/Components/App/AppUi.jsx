import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { CreateTodoButton } from "../Button/CreateTodoButton";
import { TodoSearch } from '../Search/TodoSearch';
import { TodoCounter } from '../Counter/TodoCounter';
import { TodoList } from "../List/TodoList";
import { TodoItem } from "../Item/TodoItem";
import { Logo } from '../Logo/Logo';
import { Modal } from '../Modal/Modal';
import {TodoForm} from '../Form/TodoForm';
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <>
            <Logo />
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </>
    );
}

export { AppUI };