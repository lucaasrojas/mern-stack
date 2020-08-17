import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TaskList from './TaskList'

export default function MainPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    const saveData = (e) => {
        e.preventDefault()
        console.log("saveData", title, description)
        const task = {title, description}
        axios.post('/api/tasks', task)
            .then(res => {
                console.log('OK', res)
                getTasks()
            })
            .catch(err => console.error('ERR', err))
    }
    
    const getTasks = () => {
        axios.get('/api/tasks')
            .then(res => {
                console.log("GET OK", res.data.response)
                setTasks(res.data.response)
            })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        name === 'title' ? setTitle(value) : setDescription(value)
    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        tasks.length === 0 && getTasks()
    });

    return (
        <div
            className={'mainpage_wrapper'}
            style={{
                padding: '1em',
                backgroundColor: '#E8E6FC',
                display: 'grid',
                gridTemplateColumns: 'auto minmax(785px,1170px) auto'
            }}
        >
            <div
                style={{
                    gridColumn: '2',
                    display:'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}
            >
                <div
                    style={{
                        gridColumn: '1'
                    }}
                >
                    <form onSubmit={saveData}>
                        <input type='text' name="title" placeholder='Enter title' onChange={handleChange}></input>
                        <input type='text' name="description" placeholder='Enter description' onChange={handleChange}></input>
                        <button type='submit'>Save</button>
                    </form>
                </div>
                <div
                    style={{
                        gridColumn: '2'
                    }}
                >
                    <TaskList tasks={tasks} />
                </div>
            </div>
            
        </div>
    )
}
