import React from "react";
import "./styles/TodoItem.css"

function TodoItem(props) {
    return (
        <li className="item">
            <span className="check fas fa-check"></span>
            <p className="todo-description">{props.text}</p>
            <span className="delete-todo fas fa-times"></span>
        </li>
    )
}

export default TodoItem;