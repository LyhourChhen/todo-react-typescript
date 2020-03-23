import React from "react";
import { Todo, ToggleTodo } from "../Interface/todo";

interface TodoListItems {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<TodoListItems> = ({ todo }) => {
  return (
    <>
      <ul>
        <li>
          <input type="checkbox" checked={todo.complete} />
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
