import React, { useEffect} from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
}
// interface State {}


const TaskList = (props: Props) => {

  const [tasks, setTasks] = useLocalStorage<Props>("tasks", {
    tasks: [],
  });

  useEffect(() => {
    console.log("Triggered");
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks]);

  const deleteTask = (idx: number) =>  {
    console.log(idx);
    const updatedTasks = [...props.tasks.slice(0, idx), ...props.tasks.slice(idx+1)]
    setTasks({tasks: updatedTasks});
    window.location.reload();
  };
  
  const list = () => {     
    return props.tasks.map((task, idx) => (
      <li>
        <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />  
        <button id="deleteTaskButton" className="deleteTaskButton" onClick={() => deleteTask(idx)}>Delete this Task {idx}</button>      
      </li>
      ));
    }
    return <>
    <ol>
      {list()}
    </ol>
    </>;
  }

export default TaskList;