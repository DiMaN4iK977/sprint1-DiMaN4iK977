const { where } = require('sequelize')
const {Branch} = require('../models')


class BranchController {
    async getAll(req, res) {
        // const {categoryId} = req.query
        const categoryAll = await Branch.findAll({
            // where: {categoryId}
    })
        return res.json(categoryAll) 
    }

    async create(req, res) {
        const {name, path, categoryId} = req.body
        const category = await Branch.create({name, path, categoryId})
        return res.json(category) 
    }
}


module.exports = new BranchController()