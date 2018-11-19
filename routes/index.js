let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')
let movieController = require('../controllers/movieController')

///routes for user model
router.get('/', userController.index)
router.get('/api/members', userController.show)
router.post('/api/members', userController.create)



///routes for movie model

router.get('/api/movies', movieController.show)
router.post('/api/movies', movieController.create)
router.delete('/api/movies/:movieId', movieController.delete)



module.exports = router