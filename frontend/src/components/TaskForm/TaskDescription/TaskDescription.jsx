import styles from "./TaskDescription.module.css"
function TaskDescription({setDescription}){
    
    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    return(
        <input type="text" placeholder="Describe new task" className={styles.textForm} onChange={handleChange}></input>
    );
}
export default TaskDescription