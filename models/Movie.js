let mongoose = require('../db/connections')
let Schema = mongoose.Schema

let Movie = new Schema ({

    title: String,
    img: String,
    actors: String,
    description: String,
    rating: Number,
    genre: String

})

module.exports = mongoose.model('Movie', Movie)