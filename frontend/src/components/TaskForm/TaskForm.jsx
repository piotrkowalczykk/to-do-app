import React, { useState } from "react";
import styles from "./TaskForm.module.css";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskType from "./TaskType/TaskType";
import TaskAdd from "./TaskAdd/TaskAdd";

function TaskForm(){

    const [taskDescription, setTaskDescription] = useState("");
    const [taskType, setTaskType] = useState("Select type");
    const [selectedOption, setSelectedOption] = useState("Select type");

    const clearFields = () => {
        setTaskDescription("");
        setTaskType("Select type");
        setSelectedOption("Select type");
    };

    const handleAddTask = () => {
        const newTask = {
            description: taskDescription,
            type: taskType
        };
        
        fetch("http://127.0.0.1:8080/task", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask)
        }).then(()=>window.location.reload())

        clearFields();
    } 


    return(
        <div className={styles.form}>
            <TaskDescription setDescription={setTaskDescription}></TaskDescription>
            <TaskType setTaskType={setTaskType} setSelectedOption={setSelectedOption}></TaskType>
            <TaskAdd onAddTask={handleAddTask}></TaskAdd>
        </div>
    );
}
export default TaskForm;
