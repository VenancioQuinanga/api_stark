const express = require('express')
const router = express.Router()
const post = require('../models/post')

router.get('/',(req,res)=>{
    post.findAll({order:[['id','DESC']]}).then((post)=>{
        res.json({posts:post,message:"sucesso!"})
    })
})

router.get('/posts',(req,res)=>{
    post.findAll().then((post)=>{
        res.status(200).json({posts:post})
    })
})

router.get('/new/posts',(req,res)=>{
    console.log('new')
})

router.User('/new/posts',(req,res)=>{
    
    let post = {
        descricao: req.body.descricao,
        imagem : req.body.imagem
    }

    if(!post.descricao){
        res.status(422).json({message:"O email é obrigátório!"})
    }

    if (!post.imagem) {
        res.status(422).json({message:"Imagem necessaria!"})
    }

    if (email && descricao) {
        post.create({post}).then(()=>{
    
        res.status(200).json({message:"sucesso!"})
    
        }).catch(()=>{
            res.status(201).json({message:"erro!"})
        })
    }
})

module.exports = router
