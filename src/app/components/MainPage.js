import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TaskList from './TaskList'

export default function MainPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const saveData = (e) => {
        e.preventDefault()
        const task = {title, description}
        axios.post('/api/tasks', task)
            .then(res => {
                getTasks()
                setTitle('')
                setDescription('')
            })
            .catch(err => console.error('ERR', err))
    }
    
    const getTasks = () => {
        axios.get('/api/tasks')
            .then(res => {
                setTasks(res.data.response)
                setLoaded(true)
            })
    }

    const deleteTask = (e) =>{
        axios.delete(`/api/tasks/${e._id}`)
        .then(res => {
            getTasks()
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        name === 'title' ? setTitle(value) : setDescription(value)
    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        (tasks.length === 0 || !loaded) && getTasks()
    });

    return (
        <div
            className={'mainpage_wrapper'}
            
        >
            
                <div className="form_wrapper">
                    <div className="form_input">
                        <input type='text' name="title" autoComplete="off" onChange={handleChange} value={title}></input>
                        <label for="title">
                            <span>Title</span>
                        </label>
                    </div>

                    <div className="form_input">

                        <input type='text' name="description" autoComplete="off" onChange={handleChange} value={description}></input>
                        <label for="description">
                            <span>Description</span>
                        </label>
                        
                    </div>
                    <div className="button_wrapper">
                        <button type='submit' onClick={saveData}>Save</button>
                    </div>
                    
                </div>
                    <TaskList deleteTask={deleteTask} tasks={tasks}  />
            
        </div>
    )
}
