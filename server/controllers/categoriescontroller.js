const {Categories} = require('../models')

class CategoriesController {
    async getAll(req, res) {
        const categoriesAll = await Categories.findAll()
        return res.json(categoriesAll)
    }

    async create(req, res) {
        const {name, path} = req.body
        const categories = await Categories.create({name, path})
        return res.json(categories) 
    }
}

module.exports = new CategoriesController()