const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookcontroller')


router.post('/', bookController.create)
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)

module.exports = router
