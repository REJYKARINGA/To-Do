import React from 'react'

const ListTasks = ({ task, index, removeTask, editTask }) => {
  return (
    <div className='list-tasks'>
        {task.title}
        
        <button onClick={() => removeTask(index)} className='delete-btn'>Delete</button>
        <button onClick={() => editTask(index)} className='delete-btn'>Edit</button>
    </div>
  )
}

export default ListTasks
