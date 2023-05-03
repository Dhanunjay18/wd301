import React from "react";
import './TaskCard.css';
interface TaskProp {
  title: string;
  description: string;
  dueDate : string;
}



const Task = (props: TaskProp) => {
  return (    
    <div className="TaskItem">
      <h2 className="text-base font-normal my-1">
        {props.title} ({props.dueDate})</h2>
      <p className="text-sm text-slate-500">
        {props.description}
      </p>      
    </div>
  );
};

export default Task;