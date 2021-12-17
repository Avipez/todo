import React from "react";
import "./TodoCounter.css"


function TodoCounter({completedTodos, totalTodos, loading}) {
    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}> Has completados {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export default TodoCounter;