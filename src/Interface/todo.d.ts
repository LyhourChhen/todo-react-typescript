export type Todo = {
  id: Number;
  text: String;
  complete: boolean;
};

export type ToggleTodo = (selectTodo: Todo) => void