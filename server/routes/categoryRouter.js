const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categorycontroller')

router.get('/', categoryController.getAll)
router.post('/', categoryController.create)

module.exports = router