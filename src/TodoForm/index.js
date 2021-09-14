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
      <label className="" htmlFor="">Escribe algo que te gustaria hacer en el futuro</label>
      <textarea className="" placeholder="Sacar a pasear a firulais" value={newTodoValue} onChange={onChange}></textarea>
      <button className="form_button" type="button" onClick={onSubmit}>Añadir TODO</button>
    </form>
  );
}

export { TodoForm };
