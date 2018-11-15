let Movie = require('../models/Movie')

let movieController = {

    show: (req, res) => {

        Movie.find({})
            .then((movies) => {

                res.send(movies)
            })
    },

    create: (req, res) => {

        Movie.create(req.body)
              .then((newMovie) => {

                newMovie.save()
                res.redirect(`/movies`)
              })
    }
}

module.exports = movieController