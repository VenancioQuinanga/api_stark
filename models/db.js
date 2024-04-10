const Sequelize = require('sequelize')
const sequelize = new Sequelize('testc','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    sequelize,
    Sequelize
}
