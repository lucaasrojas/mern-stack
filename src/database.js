const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.MONGO_CONNECT;

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("DB CONNECTED"))
    .catch(err => console.error(err))

module.exports = mongoose