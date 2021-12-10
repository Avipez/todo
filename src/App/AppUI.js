import React from "react";
import "./appUI.css";
import { TodoContext } from "./useTodos";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { WithLove } from "../Footer";
import Todoheader from "../TodoHeader/Todoheader";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Todoheader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Todoheader>
      <TodoList>
        {error && <p className="UI">Hijole compa, eso no se va poder</p>}
        {loading &&
          new Array(3)
            .fill(1)
            .map((item, index) => <LoadingSkeleton key={index} />)}
        {!loading && !searchedTodos.length && (
          <p className="UI">
            Crea tu primer TODO con el boton <span className="mas">+</span>{" "}
          </p>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <WithLove />
    </React.Fragment>
  );
}

export default AppUI;
