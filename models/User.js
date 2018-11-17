let mongoose = require('../db/connections')
let Schema = mongoose.Schema

let User = new Schema({

    name: String,
    img: String,
    fav: String,
    email: String,
    password: String

})

module.exports = mongoose.model('User', User)