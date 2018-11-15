let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController')

router.get('/', userController.index)

module.exports = router