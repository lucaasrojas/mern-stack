import React from 'react'

export default function TaskList(props) {
    const { tasks } = props
    return (
        <div>
            <ul
                style={{
                    listStyleType: 'none',
                    paddingLeft: 0,
                    margin: 0
                }}
            >
                {tasks.length > 0 && tasks.map(task => (
                    <li><h2>{task.title} - {task.description}</h2></li>
                ))}
            </ul>
        </div>
    )
}
