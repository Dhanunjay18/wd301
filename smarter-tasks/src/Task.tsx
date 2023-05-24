import React from "react";
import './TaskCard.css';
import { Link } from "react-router-dom";
interface TaskProp {
  id: string;
  title: string;
  description: string;
  dueDate : string;
}

const Task = (props: TaskProp) => {
  return (    
    <div className="TaskItem">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <h2 className="text-base font-normal my-1">({props.dueDate})</h2>
      <p className="text-sm text-slate-500">
        {props.description}
      </p>      
    </div>
  );
};

export default Task;