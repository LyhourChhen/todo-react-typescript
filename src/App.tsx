import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import { Todo, ToggleTodo } from "./Interface/todo";

const initialTodo: Array<Todo> = [
  { text: "Researh", complete: true },
  { text: "Hacking", complete: true }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo: ToggleTodo = selectTodo => {
    const updateTodo = todos.map(todo => {
      if (todo === selectTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(updateTodo);
  };
  return (
    <div>
      <div style={{ flexDirection: "column" }} className="alwaysCenterScreen">
        <h1>Todo React TypeScript</h1>
        {todos.map(todo => (
          <TodoList todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
