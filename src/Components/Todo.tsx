import React from "react"

interface todoInterface {
    id: Number
    text: String;
    complete: boolean;
    toggle: (id: Number) => void;
}

const Todo = (props: todoInterface) => {
    return (
        <li>
            <label style={{ textDecoration: props.complete === true ? "line-through" : "none" }}>{props.text}</label>
            <input type="checkbox"
                checked={props.complete}
                onChange={() => props.toggle(props.id)}
            />
        </li>
    )
}
export default Todo