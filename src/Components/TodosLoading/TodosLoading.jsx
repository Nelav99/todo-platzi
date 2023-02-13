import React from "react";
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <button type="button" className="LoadingTodo-completeIcon"></button>
            <p className="LoadingTodo-text">Loading TODO's...</p>
            <button type="button" className="LoadingTodo-deleteIcon"></button>
        </div>
    )
}

export {TodosLoading};