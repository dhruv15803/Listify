import React, { useRef, useState } from 'react'
import PendingTask from '../Components/PendingTask'

const PendingTasks = ({tasks,setTasks,completedTasks,setCompletedTasks}) => {

    const [isAddTask,setIsAddTask] = useState(false);
    const [task,setTask] = useState("");
    const inputRef = useRef(null);
    const [editIndex,setEditIndex] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim()===""){
            console.log('Please enter a task');
            return;
        }
        setTasks(prevTasks=>[...prevTasks,{
            "id":prevTasks.length,
            "task":task,
        }])
        setIsAddTask(false);
        setTask("");
        setEditIndex(null);
        inputRef.current.focus();
    }

    const addTask = ()=>{
        setIsAddTask(prevIsAddTask=>!prevIsAddTask);
    }

    const deleteTask = (index)=>{
        const temp = [...tasks];
        temp.splice(index,1);
        setTasks(temp);
    }

    const completeTask = (index)=>{
        setCompletedTasks(prevCompletedTasks=>[...prevCompletedTasks,{
            "id":tasks[index].id,
            "task":tasks[index].task,
        }])
        const temp = [...tasks];
        temp.splice(index,1);
        setTasks(temp);
    }

    const handleEditChange = (e)=>{
        const newTasks = tasks.map((item,i)=>{
            if(i===editIndex){
                return {
                    ...item,
                    "task":e.target.value,
                }
            }
            else{
                return item;
            }
        })
        setTasks(newTasks);
    }

    const handleEdit = (e)=>{
        e.preventDefault();
        const newTasks = tasks.map((item,i)=>{
            if(i===editIndex){
                return {
                    ...item,
                    "task":e.target[0].value,
                }
            }
            else{
                return item;
            }
        })
        setTasks(newTasks);
        setEditIndex(null); 
    }

  return (
    <>
    <div className='flex gap-4 text-2xl px-4 my-4 items-center'>
        <p>Your tasks</p>
        <button onClick={addTask} className='border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:duration-300 px-4 py-2 rounded-xl text-sm'>{isAddTask ? "Cancel" : "Add task"}</button>
    </div>
        <div className='flex flex-col'>
        {tasks.map((item,i)=>{
            if(editIndex!==null && editIndex===i){
                return <>
                    <form  onSubmit={handleEdit} className='flex px-2 gap-4'>
                        <input className='border-2 rounded-lg px-4' value={tasks[editIndex].task} onChange={handleEditChange} type='text'/>
                        <button className='border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:duration-300 rounded-lg px-2'>edit</button>
                    </form>
                </>
            }
            if(i===0) return;
            return <PendingTask key={i} index={i} item={item} deleteTask={deleteTask} completeTask={completeTask} setEditIndex={setEditIndex}/>
        })}
        {isAddTask ? <form onSubmit={handleSubmit} className='flex gap-2 mx-2 justify-center my-2'>
            <input ref={inputRef} value={task} onChange={(e)=>setTask(e.target.value)} type='text' name='task' placeholder='Enter task' className='p-1 border-2 rounded-lg'/>
            <button className='text-sm p-1 rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:duration-300'>submit</button>
        </form> : <></>}
    </div> 
        {tasks.length===1 && <div className='flex text-blue-500 justify-center text-xl h-96 items-center'>
            You have no tasks
        </div>}
    <div className='flex justify-center my-2'>
        {tasks.length > 1 && <button onClick={()=>setTasks([{"id":0,"task":""}])} className='border-2 px-2 py-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:duration-300 rounded-lg'>Clear tasks</button>}
    </div>
    </>
  )
}

export default PendingTasks;
