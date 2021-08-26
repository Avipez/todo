import React from "react";
import "./styles/TodoList.css"

function TodoList(props) {
    return (
        <section className="todolist-wrapper">
            <ul className="todolist">
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;