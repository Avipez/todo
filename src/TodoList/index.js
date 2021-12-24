import React from "react";
import "./TodoList.css"

function TodoList(props) {
    const renderFunc = props.children || props.render;
    return (
        <section className="todolist">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults}
            
            {!props.loading && props.searchedTodos.map(renderFunc)}
            <ul className="todolist">
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;