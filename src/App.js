
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

    if (!tasks.title || !tasks.date) {
      alert("Please fill in both task and date before adding.");
      return;
    }

    //Method 01----
    // const sampleList = [...taskList];
    // sampleList.push(tasks);
    // setTaskList(sampleList);

    //Method 02----
    setTaskList([...taskList,tasks])


    //clear inputs after adding a task
    setTasks({
      title: "",
      date: "",
      status: "",
      priority: false,
    })
  }

  const handleDelete = (id) =>{
    const newList = taskList.filter((task, idx) => idx !== id);
    setTaskList(newList);
  }

  return (
    <div className="App">
      <div className="h-screen w-auto px-6 bg-blue-100">
        <div className='flex items-center justify-around'>
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

        <div className='mt-4 flex flex-col gap-2'>
          {taskList.map((task,idx)=>(
            <div key={idx} className='flex w-full gap-3 py-3 px-3 bg-sky-200 rounded items-center'>
                <div className='text-xl w-[500px]'>{task.title}</div>
                <div className='text-base w-[100px]'>{task.date}</div>
                <div className='text-base w-[60px]'>{task.priority ? "🔥" : "🚫"}</div>
                <button className='text-blue-600 font-bold'>Edit</button>
                <button className='text-red-600 font-bold' 
                  onClick={()=>handleDelete(idx)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
