let mongoose = require('../db/connections')
let Schema = mongoose.Schema

let User = new Schema({

    name: {

        type: String,
        required: true
    },
    img: String,
    fav: String,
    email: {
        
        type: String,
        required: true,

    },

    password: {

        type: String,
        required: true
    }

})

module.exports = mongoose.model('User', User)