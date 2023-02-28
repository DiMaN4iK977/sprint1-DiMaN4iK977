const {Book} = require('../models')
const uuid = require('uuid')
const path = require('path')

class BookController {
    async getAll(req, res) {
        const {branchId} = req.query
        let books
        if(branchId > 1) {
            books = await Book.findAll({where: {branchId}})
        } else books = await Book.findAll()

        return res.json(books) 
    }

    async create(req, res) {
        const {name, branchId, author} = req.body

        if(req.files !== null) {
            let {img} = req.files
            // console.log(img);
            // let imageArray = []
            let image = ''
            if(img[0]) {
                for(let i = 0; i < img.length; i++) {
                    let filename = `${uuid.v4()}.jpg`
                    image.push(filename)
                    img[i].mv(path.resolve(__dirname, '..', 'static', filename))
                }
               
            } else {
                let filename = `${uuid.v4()}.jpg`
                image.push(filename)
                img.mv(path.resolve(__dirname, '..', 'static', filename))
            }
            // console.log(image);
            const book = await Book.create({name, branchId, author, images: image})
            return res.json(book)
        } 
        else {
            const book = await Book.create({name, branchId, author})
            return res.json(book)
        }

    }

    async getOne(req, res) {

    }
}

module.exports = new BookController()