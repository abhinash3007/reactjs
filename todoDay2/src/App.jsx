import AppName from "./Componenet/AppName"
import AddTodo from "./Componenet/AddTodo"
import TodoItems from "./Componenet/TodoItems"

import "./App.css";
import { name } from "ejs";
function App() {
  const todoItems=[
    {
    name:'Buy Milk',
    dueDate:'4/10/2023',
  },
  {
    name:'Go To College',
    dueDate:'4/10/2023',
  },
  {
    name:'Complete DSA',
    dueDate:'4/10/2023',
  },
];
  return (
  <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
  );
}

export default App
