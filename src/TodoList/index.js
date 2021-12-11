import React from "react";
import "./TodoList.css"

function TodoList(props) {
    return (
        <section className="todolist-wrapper">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {!props.loading && !props.searchedTodos.length && props.onEmptyTodos()}
            {props.searchedTodos.map(props.render)}
            <ul className="todolist">
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;