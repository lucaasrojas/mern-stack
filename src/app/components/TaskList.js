import React from 'react'

export default function TaskList(props) {
    const { tasks, deleteTask } = props

    return (
        <div className={'task_list'}>            
            {tasks.length > 0 && tasks.map(task => (
                <div>
                    <span onClick={()=>{deleteTask(task)}}>X</span>
                    <p>{task.title} - {task.description}</p>
                </div>
            ))}
        </div>
    )
}
