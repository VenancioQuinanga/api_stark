const db = require('./db')

const posts = db.sequelize.define('num',{
    descricao:{
        type:db.Sequelize.TEXT
    },
    imagem:{
        type:db.Sequelize.TEXT
    }
})

/*
posts.create({ descricao:"Novas sapatilhas do mercado",imagem:"sapatilhas-coloridas-do-esporte3.jpg" })
posts.create({ descricao:"Tenis Timberland",imagem:"tenis Timberland.jpg" })
posts.create({ descricao:"Tenis Air Jordan",imagem:"tenis-air-jordan-4-retro-green-metallic-11-509f7a9fdd32ca6b4315924216153677-640-0.jpeg" })
posts.create({ descricao:"Tenis branco",imagem:"tenis-branco (2).jpg" })
*/
//posts.sync({force:true})

module.exports = posts;
