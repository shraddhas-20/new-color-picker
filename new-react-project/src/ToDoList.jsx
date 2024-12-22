
import React, {useState} from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !==""){
setTasks (t => [...t, newTask]);
setNewTask("");
        }
    }
    function deleteTask(index){
          
        const updatedTasks = tasks.filter((element, i) => i !== index);
       setTasks(updatedTasks);
    }
     function moveTaskUp(index){
         if (index>0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]]= [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks);
        }
     }
    
     function moveTaskDown(index){
       if(index< tasks.length-1)
        {
            const updateTasks = [...tasks];
       [updateTasks[index], updateTasks[index+1]]= [updateTasks[index+1], updateTasks[index]];
       setTasks(updateTasks);
     }
     }
    return(
        <div className="to-do-list">
<h1>To-Do-List</h1>
<div>
    <input className="placeholder"
            type= "text"
    placeholder="Enter a text..."
    value= {newTask}
    onChange={handleInputChange}
    />
    <button className="add-button"
    onClick ={addTask}> 
        Add Task
    </button>
</div>
<ul>
    {tasks.map((element, index) => 
    <li key={index}>
        <span className="text">{element}</span>
        <button className="delete-button"
        onClick={() =>deleteTask(index)}>
            DELETE</button>
            <button className="move-button"
        onClick={() => moveTaskDown(index)}>DOWN</button>
<button className="move-button"
        onClick={() => moveTaskUp(index)}>UP</button>
        
    </li>)}
</ul>
        </div>
    );
}
export default ToDoList
