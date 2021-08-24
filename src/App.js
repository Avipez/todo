/* import './App.css'; */
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

import React from "react";

const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar curso de react", completed: false},
  {text: "llorar como lloro hernan cortes", completed: false}

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      {/* <CreateTodoButton /> */}
      <button>+</button>
      </ React.Fragment>
  );
}

export default App;

