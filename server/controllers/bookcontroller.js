const {Book, BookInfo} = require('../models')
const uuid = require('uuid')
const path = require('path')

// надо функцию на кленте вызывать
function ImageProcessing(image) {
    const width = image.width
    const height = image.height
    const maxHeight = 900
    const maxWidth = 1200
    const canvas = document.createElement('canvas')


    if(width > maxWidth) {
        height = Math.round((height *- maxWidth / width))
        width = maxWidth
    } else {
        if(height > maxHeight) {
            width = Math.round((width *= maxWidth / height))
            height = maxHeight
        }
    }
    
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0, width, height)

    const compressed = canvas.toDataURL('image/jpg', 0.7)
    return compressed
}

class BookController {
    

    async getAll(req, res) {
        const {branchId} = req.query
        const {images} = req.body
        // console.log(Book);
        if(images) {
            images = JSON.parse(images)
        }
        let books
        if(branchId > 1) {
            books = await Book.findAndCountAll({where: {branchId}})
        } else books = await Book.findAndCountAll()

        return res.json(books) 
    }

    async create(req, res) {
        const {name, branchId, author, info} = req.body        

        if(req.files !== null) {
            let {img} = req.files
            // console.log(img);
            // let imageArray = []
            let image = []
            if(img[0]) {
                for(let i = 0; i < img.length; i++) {
                    // ImageProcessing(img[i])
                    let filename = `${uuid.v4()}.jpg`
                    image.push(filename)
                    // image = image + ',' + filename
                    img[i].mv(path.resolve(__dirname, '..', 'static', filename))
                }
               
            } else {
                let filename = `${uuid.v4()}.jpg`
                // ImageProcessing(img)
                image.push(filename)
                img.mv(path.resolve(__dirname, '..', 'static', filename))
            }
            // console.log(JSON.stringify(image));
            const book = await Book.create({name, branchId, author, images: JSON.stringify(image)})

            if(info) {
                info = JSON.parse(info)
                info.forEach(e => {
                    BookInfo.create({
                        title: e.title, 
                        description: e.description,
                        bookId: book.id
                    })
                });
            }

            return res.json(book)
        } 
        else {
            const book = await Book.create({name, branchId, author})

            if(info) {
                info = JSON.parse(info)
                info.forEach(e => {
                    BookInfo.create({
                        title: e.title, 
                        description: e.description,
                        bookId: book.id
                    })
                });
            }

            return res.json(book)
        }

    }

    async getOne(req, res) {
        const {id} = req.params
        const book = await Book.findOne({
            where: {id},
            include: [{model: BookInfo, as: 'info'}]
        })
        return res.json(book)
    }
}

module.exports = new BookController()