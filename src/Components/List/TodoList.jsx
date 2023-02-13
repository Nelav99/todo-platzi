import { Container } from "@mui/material";
import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <Container>
            <ul>
                {props.children}
            </ul>
        </Container>
    );
}

export { TodoList };