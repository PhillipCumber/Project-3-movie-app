let User = require('../models/User')

let userController = {

    index: (req, res) => {

        res.send('hey')
    },

    show: (req, res) => {

        User.find({})
            .then((user) => {

                res.send(user)
            })
    },

    create: (req, res) => {

        User.create(req.body)
              .then((newUser) => {

                newUser.save()
                res.redirect(`/members`)
              })
    }
}

module.exports = userController