import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { TODOS_KEY } from "./settings";

function App() {
  // VLASNIK STATE-A JE ONAJ KOJI TREBA DA MANIPULISE TIM STATE-OM!!!!
  const [todos, setTodos] = useState([]);

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = title => {
    setTodos(prevState => {
      return [...prevState, { id: uuidv4(), title }]
    });
  };

  useEffect(() => {
    // uvek; i tokom prvog renderovanja i tokom svakog update-a
  });

  useEffect(() => {
    // samo tokom prvog renderovanja
  }, []);

  useEffect(() => {
    // kada se moj todos promeni
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    setTodos(todos ? todos : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos.length]);

  return (
    <div className="App">
      <Navbar todos={todos} />
      <TodoList todos={todos} handleDelete={handleDelete} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
