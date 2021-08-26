/* import './App.css'; */
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";

const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar curso de react", completed: true},
  {text: "Llorar como lloro hernan cortes", completed: false},
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar curso de react", completed: false},
  {text: "Llorar como lloro hernan cortes", completed: false},

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} />))}
      </TodoList>
      <CreateTodoButton />
      </ React.Fragment>
  );
}

export default App;

