import styles from "./App.module.css"
import MainTitle from "./components/MainTitle/MainTitle";
import TaskForm from "./components/TaskForm/TaskForm";
import Table from "./components/Table/Table";
function App() {
           
  return(
    <div className={styles.container}>
      <MainTitle></MainTitle>
      <TaskForm></TaskForm>
      <Table></Table>
    </div>
  );
}

export default App
