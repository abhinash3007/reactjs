import AppName from "./Componenet/AppName"
import AddTodo from "./Componenet/AddTodo"
import TodoItems from "./Componenet/TodoItems"

import "./App.css";
import { name } from "ejs";
import { useState } from "react";
import WelcomeMessage from "./Componenet/WelcomeMessage";
function App() {

const [todoItems,setTodoItems]=useState([""]);
const handleNewItem=(itemName,itemDueDate)=>{
  // const newTodoItem=[...todoItems,{name:itemName,dueDate:itemDueDate}];
  // setTodoItems(newTodoItem);

  //functional updates
  setTodoItems((currValues)=>[...currValues,{name:itemName,dueDate:itemDueDate}]);
};
const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
}
  return (
  <center className="todo-container">
    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem} ></AddTodo>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  );
}

export default App
