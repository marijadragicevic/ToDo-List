import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete }) => {
    return (
        <ul>
            {todos.length
                ? todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                    />
                ))
                : "You are finished wiyh your todo list :)"
            }

        </ul>
    );
};

export default TodoList;