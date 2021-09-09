import React from "react";
import "./TodoCounter.css"


function TodoCounter({completed, total}) {

    return (
        <h2 className="TodoCounter"> Has completados {completed} de {total} TODOs</h2>
    )
}

export default TodoCounter;