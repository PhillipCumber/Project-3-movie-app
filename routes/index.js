let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')
let movieController = require('../controllers/movieController')

///routes for user model
router.get('/members', userController.index)
// router.get('/api/members', userController.show)
router.post('/members', userController.create)



///routes for movie model

router.get('/movies', movieController.index)
router.post('/movies', movieController.create)
router.get('/movies/:movieId', movieController.show)
router.patch('/movies/:movieId', movieController.update)
router.delete('/movies/:movieId', movieController.delete)



module.exports = router