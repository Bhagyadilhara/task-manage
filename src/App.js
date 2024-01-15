
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    title: "",
    date: "",
    status: "",
    priority: "",
  });

  const handleOnChange = (e) =>{
    //console.log(e.target.value);
    setTasks({...tasks,[e.target.name]: e.target.value});
  }



  return (
    <div className="App">
      <div className="h-screen w-auto bg-blue-300">
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <label>Task</label>
            <input 
              name='title' 
              onChange={(e)=> handleOnChange(e)}
              value={tasks.title}
              placeholder='task'
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
