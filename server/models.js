const sequelize = require('./db.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
    images: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [],  allowNull: false},
})

const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    path: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Branch = sequelize.define('branch', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    path: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Raiting = sequelize.define('raiting', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const BookInfo = sequelize.define('book_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(Raiting)
Raiting.belongsTo(User)

User.hasOne(Basket)
Basket.belongsTo(User)

Book.hasMany(BookInfo)
BookInfo.belongsTo(Book)

Categories.hasMany(Branch)
Branch.belongsTo(Categories)

Branch.hasMany(Book)
Book.belongsTo(Branch)

Book.hasMany(Raiting)
Raiting.belongsTo(Book)

module.exports = {
    User,
    Book,
    Categories,
    Branch,
    Raiting,
    BookInfo
}