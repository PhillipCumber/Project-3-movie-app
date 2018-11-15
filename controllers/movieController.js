let Movie = require('../models/Movie')

let movieController = {

    show: (req, res) => {

        Movie.find({})
            .then((movies) => {

                res.send(movies)
            })
    }
}

module.exports = movieController