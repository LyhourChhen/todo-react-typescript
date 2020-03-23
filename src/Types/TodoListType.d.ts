export type TodoType = {
    id: Number;
    text: String;
    complete: boolean;
}

export type AddTodo = (newTodo: string) => void;