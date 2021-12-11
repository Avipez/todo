import React from "react";
import "./TodoCounter.css"


function TodoCounter({completedTodos, totalTodos}) {
    return (
        <h2 className="TodoCounter"> Has completados {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export default TodoCounter;