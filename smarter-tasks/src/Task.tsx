import React from "react";
import './TaskCard.css';
interface TaskProp {
  title: string;
  key: number;
  description: string;
  dueDate : string;
}
class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-black border-slate-100">
        <h2 className="text-base font-normal my-1">{this.props.title} ({this.props.dueDate})</h2>
        <p className="text-sm text-slate-500">
          {this.props.description}
        </p>
      </div>
    );
  }
  }

  export default Task;