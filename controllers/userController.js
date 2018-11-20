let User = require('../models/User')

let userController = {

    index: (req, res) => {
        User.find({})
            .then((user) => {

                res.send(user)
            })
    },

    show: (req, res) => {
        
        let userId = req.params.userId
        User.findById(userId)
            .then((user) => {

                res.send(user)
            })

    },

    create: (req, res) => {

        User.create(req.body)
            .then((newUser) => {

                newUser.save()
                
            })
    },

    update: (req, res) => {

        let userId = req.params.userId
        User.findByIdAndUpdate(userId, req.body)
            .then((updateUser) => {

                updateUser.save()
                res.send(update)
            })
    },

    delete: (req, res) => {

        let userId = req.params.userId
        User.findByIdAndDelete(userId)
            .then(() => {

                console.log('deleted')
            })
    }
}

module.exports = userController