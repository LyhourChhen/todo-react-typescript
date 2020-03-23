import React, { useState } from "react";
import "./App.scss"
// import type
import { TodoType, AddTodo } from "./Types/TodoListType"

// import components
import Todo from "./Components/Todo"
import AddTodos from "./Components/AddTodos"

// Pretend Data
const todoData: Array<TodoType> = [
  { id: 1, text: "Learn Hacking on Udemy", complete: true },
  { id: 2, text: "Learn React on Facebook", complete: false },
  { id: 3, text: "Learn CS50 on Udemy", complete: false },
]

const App = () => {
  const [datas, setDatas] = useState(todoData)

  const handleToggle = (id: Number) => {
    const newData = datas.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          complete: !data.complete
        }
      }
      return data;
    })
    setDatas(newData)
  }

  const handleAddTodo: AddTodo = (newTodo) => {
    setDatas([
      ...datas,
      {
        text: newTodo,
        complete: false,
        id: datas.length + 1
      }
    ])
  }

  return (
    <div>
      <h2>TodoList wih React TypeScript</h2>
      <AddTodos handleAddTodo={handleAddTodo} />
      <ul>
        {datas.map((data) =>
          <Todo id={data.id} text={data.text} complete={data.complete} toggle={handleToggle} />
        )}
      </ul>

    </div>
  );
};

export default App;
