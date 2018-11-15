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
    }
}

module.exports = userController