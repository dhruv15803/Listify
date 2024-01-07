import React from 'react'

const CompletedTask = ({item,i}) => {
  return (
    <>
    <div className='border-b-2 p-2 text-xl'>
        {item.task}
    </div>
    </>
  )
}

export default CompletedTask