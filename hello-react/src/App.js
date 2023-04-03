import './App.css';
import TaskCard  from './TaskCard';

function App() {
  return (
    <>
    <center><h1 className='text-xl font-bold'> Smarter Tasks </h1></center>
    <div className='grid grid-cols-4 gap-4'>
      <div className='col-start-2 border rounded-m '>
        <h2 className='text-l font-bold'> Pending </h2>
        <TaskCard title="First Task" assigneeName="Virat" dueDate="22nd March" />
        <TaskCard title="Second Task" assigneeName="Faf" dueDate="22nd March" />
      </div>
      <div className='col-start-3 border rounded-m '>
        <h2 className='text-l font-bold'> Done </h2>
        <TaskCard title="Third Task" assigneeName="Siraj" completedAtDate="28th March"/>
      </div>
    </div>
    </>
  );
}

export default App;
