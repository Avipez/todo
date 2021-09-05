/* import './App.css'; */
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import React from "react";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de react", completed: true},
  {text: "Llorar como lloro hernan cortes", completed: true}

]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchedTodos >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    })
  }
  
  return (
    <React.Fragment>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
      </TodoList>
      <CreateTodoButton />
      </ React.Fragment>
  );
}

export default App;

