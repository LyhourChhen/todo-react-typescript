import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import { Todo, ToggleTodo } from "./Interface/todo";

const initialTodo: Array<Todo> = [
  { id: 1, text: "Researh", complete: true },
  { id: 2, text: "Hacking", complete: true }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo)

  const toggleTodo: ToggleTodo = (selectTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === selectTodo.id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
    })
    setTodos(newTodos)
  }

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
