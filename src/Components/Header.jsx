import React from 'react'
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className='flex border-2 border-blue-500 p-2 bg-blue-500 text-white justify-around items-center'>
        <div className='text-3xl'>
           <Link to='/'> Listify</Link>
        </div>
        <Link to='/completed'><div className='text-xl flex'>
            <BsFillFileEarmarkCheckFill/>
            <div className='relative border-2 border-red-500 bg-red-500 text-white rounded-3xl px-1 h-4 flex items-center justify-center text-[12px] right-2 bottom-2 z-10'>
                {props.noOfCompletedTasks}
            </div>
        </div></Link>
    </nav>
  )
}

export default Header