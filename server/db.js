const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'book_library',
    'postgres',
    '760774',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
)