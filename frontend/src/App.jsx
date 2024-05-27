import styles from "./App.module.css"
import MainTitle from "./components/MainTitle/MainTitle";
import TaskForm from "./components/TaskForm/TaskForm";
function App() {
           
  return(
    <div className={styles.container}>
      <MainTitle></MainTitle>
      <TaskForm></TaskForm>
    </div>
  );
}

export default App
