const express = require('express')
const router = express.Router()

const Task = require('./models/task')

router.get('/api/tasks', async (req, res) => {
    const response = await Task.find();
    res.json({
        response
    })
})

router.get('/api/tasks/:id', async (req, res) => {
    const response = await Task.findById();
    res.json({
        response
    })
})

router.post('/api/tasks', async (req, res) => {
    const { title, description } = req.body;
    await new Task({title, description}).save();
    res.json({
        status: "Saved",
        body:{
            title, description
        }
    })
})

module.exports = router