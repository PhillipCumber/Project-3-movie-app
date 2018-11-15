let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')

///routes for user model
router.get('/', userController.index)
router.get('/members', userController.show)

///routes for movie model



module.exports = router