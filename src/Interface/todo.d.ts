export type Todo = {
  text: String;
  complete: boolean;
};

export type ToggleTodo = (selectTodo: Todo) => void;
export type AddTodo = (newTodo: String) => void;
