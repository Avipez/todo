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
import TodoError from "../TodoError"
import ChangeAlertWithStorageListener from "../ChangeAlert";
import "./app.css";

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
    syncronizeTodos
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
        onEmptySearchResults={ (searchText) => <p> No hay resultados para {searchText}</p>}
        /* render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */
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

      {/* <TodoList>
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
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <ChangeAlertWithStorageListener syncronize={syncronizeTodos} />
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      <WithLove />
    </React.Fragment>
  );
}

export default App;
