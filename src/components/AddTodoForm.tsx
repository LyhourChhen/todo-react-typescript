import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "../Interface/todo";

interface AddTodoFormProps {
  addNewTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addNewTodo(newTodo);
  };
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add new Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
