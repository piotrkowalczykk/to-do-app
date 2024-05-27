import styles from "./TaskDescription.module.css"
function TaskDescription(){
    return(
        <input type="text" placeholder="Describe new task" className={styles.textForm}></input>
    );
}
export default TaskDescription