const express = require('express')
const sequelize = require('./db.js')
const models = require('./models.js')
const cors = require('cors')
const router = require('./routes/index.js')
const fileUpload = require('express-fileupload')
const path = require('path')

PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Working'})
// })

const start = async () => {
    try {
        sequelize.authenticate()
        sequelize.sync()
        app.listen(PORT, ()=> console.log('Server start'))
    } catch (e) {
        console.log(e);
    }
}

start()