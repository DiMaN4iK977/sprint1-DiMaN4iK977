const Router = require('express')
const router = new Router()
const categoriesController = require('../controllers/categoriescontroller')

router.get('/', categoriesController.getAll)
router.post('/', categoriesController.create)

module.exports = router