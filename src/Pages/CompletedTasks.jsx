import React from 'react'
import CompletedTask from '../Components/CompletedTask'

const CompletedTasks = ({completedTasks,setCompletedTasks}) => {
  return (
    <>
    <div className='m-4 font-bold text-2xl'>
        Completed tasks
    </div>
    {completedTasks.length===0 && <div className='text-xl text-blue-500 px-4'>
        You have no completed tasks
        </div>}
    <div className='flex flex-col px-2 gap-2'>
        {completedTasks.map((item,i)=>{
            return <CompletedTask key={i} index={i} item={item}/>
        })}
    </div>
    {completedTasks.length!==0 && <div className='flex justify-center my-4'>
        <button onClick={()=>setCompletedTasks([])} className='border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:duration-300 rounded-lg px-2 '>Clear</button>
    </div>}
    </>
  )
}

export default CompletedTasks