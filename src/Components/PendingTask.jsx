import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const PendingTask = ({item,index,...props}) => {



  return (
    <>
    <div className='flex border-b-2 p-2 m-1 border-gray-200 items-center gap-8'>
        <div className='font-bold w-3/5 flex flex-wrap'>
            {item.task}
        </div>
        <div className='w-2/5 flex justify-end gap-4 text-xl text-blue-500'>
            <FaCheck onClick={()=>props.completeTask(index)}/>
            <FaTrash onClick={()=>props.deleteTask(index)}/>
            <FaRegEdit onClick={()=>props.setEditIndex(index)}/>
        </div>
    </div>
    </>
  )
}

export default PendingTask