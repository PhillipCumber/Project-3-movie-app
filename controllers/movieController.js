let Movie = require('../models/Movie')

let movieController = {

    index: (req, res) => {

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
    },

    show: (req, res) => {

        let movieId = req.params.movieId
        Movie.findById(movieId)
              .then((movie) => {

                res.send(movie)
              })
    },

    delete: (req, res) => {

        Movie.findByIdAndRemove(req.params.movieId)
              .then(() => {

                res.redirect('/movies')
              })
    }
}

module.exports = movieController
