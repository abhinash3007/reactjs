import AppName from "./Componenet/AppName"
import AddTodo from "./Componenet/AddTodo"
import TodoItem1 from "./Componenet/TodoItem1"
import TodoItem2 from "./Componenet/TodoItem2"
import "./App.css";
function App() {
  return <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="item-container">
    <TodoItem1></TodoItem1>
    <TodoItem2></TodoItem2>
    </div>
  </center>
}

export default App
