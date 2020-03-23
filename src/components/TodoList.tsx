import React from "react";
import { Todo, ToggleTodo } from "../Interface/todo";

interface TodoListItems {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListItems> = ({ todo, toggleTodo }) => {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          <label
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.text}
          </label>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
