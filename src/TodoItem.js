import React from "react";
import "./styles/TodoItem.css"

function TodoItem(props) {
    return (
        <li className="item">
            <span className={`${props.completed ? "icon-check_active fas fa-check": "check fas fa-check"}`}></span>
            <p className={`todo-description ${props.completed && "todoitem-p_completed"}`}>{props.text}</p>
            <span className={`${props.completed ? "fas fa-undo todo-undo" : "delete-todo fas fa-trash"}`}></span>
        </li>
    )
}

export default TodoItem;