
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    title: "",
    date: "",
    status: "",
    priority: false,
  });

  const [taskList, setTaskList] = useState([]);

  console.log(tasks);

  const handleOnChange = (e) =>{
    //console.log(e.target.value);
    if(e.target.name === "priority"){
      setTasks({...tasks,[e.target.name]: e.target.checked});
    }else{
      setTasks({...tasks,[e.target.name]: e.target.value});
    }
    
  }

  const handleAdd = () =>{

    //Methode 01----
    // const sampleList = [...taskList];
    // sampleList.push(tasks);
    // setTaskList(sampleList);

    //Methode 02----
    setTaskList([...taskList,tasks])
  }

  return (
    <div className="App">
      <div className="h-screen w-auto px-6 bg-blue-100">
        <div className='flex items-center gap-8'>
          <div className='flex flex-col'>
            <label>Task</label>
            <input 
              name='title' 
              type='text'
              onChange={(e)=> handleOnChange(e)}
              value={tasks.title}
              placeholder='task'
            />
          </div>
          <div className='flex flex-col'>
            <label>Date</label>
            <input 
              name='date' 
              type='date'
              onChange={(e)=> handleOnChange(e)}
              value={tasks.date}
              placeholder='31/12/2024'
            />
          </div>
          <div className='flex flex-col'>
            <label>Priority</label>
            <input 
              name='priority' 
              type='checkbox'
              onChange={(e)=> handleOnChange(e)}
              checked={tasks.priority}
            />
          </div>
          <div>
            <button className='bg-blue-400 px-4 py-2 min-w-[6rem] rounded'
               onClick={() => handleAdd()}>Add
            </button>
          </div>
        </div>

        <div className='mt-4'>
          {taskList.map((task,idx)=>(
            <div key={idx}>
                <div>{task.title}</div>
                <div>{task.date}</div>
                <div>{task.priority}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
