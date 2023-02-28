const Router = require('express')
const router = new Router()
const BookRouter = require('./bookrouter')
const CategoriesRouter = require('./categoriesrouter')
const BranchRouter = require('./categoryrouter')
const UserRouter = require('./userrouter')


router.use('/user', UserRouter)
router.use('/categories', CategoriesRouter)
router.use('/branch', BranchRouter)
router.use('/book', BookRouter)

module.exports = router