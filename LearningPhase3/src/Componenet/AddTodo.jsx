import { useState,useRef } from "react";

function AddTodo({onNewItem}) {
    //const [todoName,setTodoName]=useState("");
    //const [dueDate,setDueDate]=useState("");

    //for use ref
    const todoNameElement=useRef();
    const todoDueDateElement=useRef();

    // const handleNameChange=(event)=>{
    //     setTodoName(event.target.value);
    //     noOfClicks.current+=1;
    // }
    // const handleDateChange=(event)=>{
    //     setDueDate(event.target.value);
    // }
    const handleAddButtonClicked=()=>{
        //onNewItem(todoName,dueDate);
        // setDueDate("");
        // setTodoName("");
        const todoName=todoNameElement.current.value;
        const dueDate=todoDueDateElement.current.value;
        todoNameElement.current.value="";
        todoDueDateElement.current.value="";
        onNewItem(todoName,dueDate);
    }
    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-4">
                    <input type="text" 
                    ref={todoNameElement} 
                    placeholder="Enter Todo List" 
                    //value={todoName} 
                    //onChange={handleNameChange}
                    ></input>
                </div>
                <div className="col-4">
                    <input type="date" 
                    ref={todoDueDateElement} 
                    //onChange={handleDateChange} 
                    //value={dueDate}
                    ></input>
                </div>
                <div className="col-2">
                    <button type="button" 
                    class="btn btn-success kg-button" 
                    onClick={handleAddButtonClicked}
                    >ADD</button>
                </div>
            </div>
        </div>
    );
}
export default AddTodo;