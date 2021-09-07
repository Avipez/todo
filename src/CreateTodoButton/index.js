import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    alert("Aquí se deberia de abrir el modal");
  };

  return (
    <button className="create-todo_button fas fa-plus-circle" onClick={onClickButton}>
    </button>
  );
}

export { CreateTodoButton };