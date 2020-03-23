import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import { Todo } from "./Interface/todo";

const todos: Array<Todo> = [
  { text: "Researh", complete: true },
  { text: "Hacking", complete: false }
];

const App = () => {
  return (
    <div>
      <div style={{ flexDirection: "column" }} className="alwaysCenterScreen">
        <h1>Todo React TypeScript</h1>
        <TodoList todo={todos[0]} />
      </div>
    </div>
  );
};

export default App;
