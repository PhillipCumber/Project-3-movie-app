let Movie = require('../models/Movie')

let movieController = {

    index: (req, res) => {

        Movie.find({})
            .then((movies) => {

                res.send(movies)
            })
    },

    create: (req, res) => {

        let movieId = req.params.movieId
        Movie.findById(movieId) 
             .then((movie) => {

                Movie.create(req.body)
                     .then((movie) => {

                        movie.save()
                        res.send(movie)
                        console.log(movie)
                     })
             })
    },

    show: (req, res) => {

        let movieId = req.params.movieId
        Movie.findById(movieId)
              .then((movie) => {

                res.send(movie)
              })
    },

    update: (req, res) => {

        let movieId = req.params.movieId
        Movie.findByIdAndUpdate(movieId, req.body)
                .then((updateInfo) => {

                    updateInfo.save()
                    res.send(updateInfo)
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
