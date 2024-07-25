import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import './Todo.css'

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [currentTask, setCurrentTask] = useState('')
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        document.title = `You have ${tasks.length} pending task(s)`
    }, [tasks])

    const addTask = (title) => {
        if (isEditing) {
            const updatedTasks = tasks.map((task, index) => 
                index === editIndex ? { title } : task
            )
            setTasks(updatedTasks)
            setIsEditing(false)
            setEditIndex(null)
        } else {
            const newTask = [...tasks,{ title } ]
            setTasks(newTask)
        }
        setCurrentTask('')
    }

    const removeTask = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }

    const editTask = (index) => {
        setIsEditing(true)
        setCurrentTask(tasks[index].title)
        setEditIndex(index)
    }

    return (
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <AddTask
                    addTask={addTask}
                    isEditing={isEditing}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                />
            </div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <ListTasks
                        task={task}
                        removeTask={removeTask}
                        editTask={editTask}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Todo
