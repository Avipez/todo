import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">...</label>
      <textarea placeholder="Sacar a pasear a firulais" value={newTodoValue} onChange={onChange}></textarea>
      <button type="button" onClick={onSubmit}>Añadir TODO</button>
    </form>
  );
}

export { TodoForm };
