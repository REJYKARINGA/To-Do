import React, { useState, useEffect } from 'react'

const AddTask = ({ addTask, isEditing, currentTask, setCurrentTask }) => {
    useEffect(() => {
        if (isEditing) {
            setValue(currentTask)
        } else {
            setValue('')
        }
    }, [isEditing, currentTask])

    const [value, setValue] = useState('')

    const addItem = () => {
        if (value.trim()) {
            addTask(value)
            setValue('')
        }
    }

    return (
        <div className='input-container'>
            <input
                type='text'
                className='input'
                placeholder='Add a new Task'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addItem} className='add-button'>
                {isEditing ? 'Edit' : 'Add'}
            </button>
        </div>
    )
}

export default AddTask
