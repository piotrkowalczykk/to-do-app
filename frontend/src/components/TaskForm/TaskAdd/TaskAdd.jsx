import React from "react";
import styles from "./TaskAdd.module.css";

function TaskAdd({ onAddTask, clearFields }) {
    const handleAddClick = () => {
        onAddTask();
        clearFields();
    };

    return (
        <button className={styles.btn} onClick={handleAddClick}>Add</button>
    );
}

export default TaskAdd;
