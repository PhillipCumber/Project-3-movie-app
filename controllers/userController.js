let User = require('../models/User')

let userController = {

    index: (req, res) => {
        User.find({})
            .then((user) => {

                res.send(user)
            })
    },

    show: (req, res) => {
        res.send({message: 'not yet implemented'})

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