let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')
let movieController = require('../controllers/movieController')

///routes for user model
router.get('/', userController.index)
router.get('/members', userController.show)

///routes for movie model

router.get('/movies', movieController.show)

module.exports = router