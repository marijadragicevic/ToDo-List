import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Navbar = () => {
    const { todos } = useContext(TodoContext);
    return <div>Todos left on my list: {todos.length}</div>;
};

export default Navbar;