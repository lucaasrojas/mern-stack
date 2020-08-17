const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes')
const path = require('path');
const app = express();
const { mongoose } = require('./src/database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(express.json())
// Routes
app.use(routes)
// Static Files
console.log("STATIC", path.join(__dirname,'public'))
app.use(express.static(path.join(__dirname,'public')))

// Start server
app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}`)
})