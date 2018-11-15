let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')
let movieController = require('../controllers/movieController')

///routes for user model
router.get('/', userController.index)
router.get('/api/members', userController.show)
router.post('/members', userController.create)


///routes for movie model

router.get('/movies', movieController.show)
router.post('/movies', movieController.create)


module.exports = router