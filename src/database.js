const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/';


mongoose.connect(URL)
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.error(err))

module.exports = mongoose