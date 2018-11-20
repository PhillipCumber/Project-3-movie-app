let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')
let movieController = require('../controllers/movieController')

///routes for user model
router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/:userId', userController.show)
router.patch('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)



///routes for movie model

router.get('/movies', movieController.index)
router.post('/movies', movieController.create)
router.get('/movies/:movieId', movieController.show)
router.patch('/movies/:movieId', movieController.update)
router.delete('/movies/:movieId', movieController.delete)



module.exports = router