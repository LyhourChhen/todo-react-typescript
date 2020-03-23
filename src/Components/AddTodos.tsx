import React, { useState, ChangeEvent, FormEvent } from "react"
import { AddTodo } from "../Types/TodoListType"
interface AddTodoProps {
    handleAddTodo: AddTodo
}

const AddTodos: React.FC<AddTodoProps> = ({ handleAddTodo }) => {
    const [newTodo, setNewTodo] = useState('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await handleAddTodo(newTodo)
        await setNewTodo('')
    }
    return (
        <div>
            <form>
                <input type="text" value={newTodo} onChange={handleChange} />
                <button onClick={handleSubmit} style={{ margin: 5 }}>Add New Todo</button>
            </form>
        </div>
    )
}

export default AddTodos;