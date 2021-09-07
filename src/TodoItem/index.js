import React from "react";
import "./TodoItem.css"

function TodoItem(props) {

    return (
        <li className="item">
            <span className={`${props.completed ? "fas fa-undo todo-undo": "check fas fa-check"}`}
            onClick={props.onComplete}
            >
            </span>
            <p className={`todo-description ${props.completed && "todoitem-p_completed"}`}>{props.text}</p>
            <span className={"delete-todo fas fa-trash"}
            onClick={props.onDelete}
            >
            </span>
        </li>
    )
}

export default TodoItem;