require('dotenv').config()
let mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {

    console.log('Mongoose is connected')
})

module.exports = mongoose