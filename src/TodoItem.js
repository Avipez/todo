import React from "react";
import "./styles/TodoItem.css"

function TodoItem(props) {
    const onComplete = () => {
        alert("Ya completaste el TODO " + props.text)
    }

    const onDelete = () => {
        alert("Borraste el TODO " + props.text)
    }

    return (
        <li className="item">
            <span className={`${props.completed ? "icon-check_active fas fa-check": "check fas fa-check"}`}
            onClick={onComplete}
            >
            </span>
            <p className={`todo-description ${props.completed && "todoitem-p_completed"}`}>{props.text}</p>
            <span className={`${props.completed ? "fas fa-undo todo-undo" : "delete-todo fas fa-trash"}`}
            onClick={onDelete}
            >
            </span>
        </li>
    )
}

export default TodoItem;