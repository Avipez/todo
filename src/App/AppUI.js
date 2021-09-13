import React from "react";
import { TodoContext } from "../TodoContext";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"
import {LoadingSkeleton} from "../LoadingSkeleton"

function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hijole compa, eso no se va poder</p>}
        {loading && new Array(3).fill(1).map(
          (item) => <LoadingSkeleton key={item} />
        )}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO </p>}
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
          <TodoForm>
            
          </TodoForm>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
}

export default AppUI;
