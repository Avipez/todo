import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    if (props.openModal) {
      props.setOpenModal(false);
    } else {
      props.setOpenModal(true);
    }
  };

  return (
    <button 
      className={`${
        props.openModal
          ? "create-button_over fas fa-arrow-left"
          : "create-todo_button fas fa-plus"
      }`}
      onClick={onClickButton}
    ></button>
  );
}

export { CreateTodoButton };
