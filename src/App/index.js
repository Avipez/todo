import React from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { WithLove } from "../Footer";
import Todoheader from "../TodoHeader/Todoheader";
import TodoLoading from "../TodoLoading";
import EmptyTodos from "../EmptyTodos/EmptyTodos";
import { useTodos } from "./useTodos";
import TodoError from "../TodoError";
import ChangeAlert from "../ChangeAlert";
import NoResults from "../NoResults";
import "./app.css";

/* --openssl-legacy-provider para correr npm run en laptop */

function App() {
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
    addTodo,
    syncronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <Todoheader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Todoheader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults= {<NoResults searchText={searchValue} />}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <ChangeAlert syncronize={syncronizeTodos} />
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <WithLove />
    </React.Fragment>
  );
}

export default App;
