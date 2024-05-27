import styles from "./TaskForm.module.css"
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskType from "./TaskType/TaskType";
import TaskAdd from "./TaskAdd/TaskAdd";
function TaskForm(){
    return(
        <div className={styles.form}>
            <TaskDescription></TaskDescription>
            <TaskType></TaskType>
            <TaskAdd></TaskAdd>
        </div>
    );
}
export default TaskForm