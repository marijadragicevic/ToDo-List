import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add new todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;