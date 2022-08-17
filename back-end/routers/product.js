const express = require('express')
const Product = require('../models/product')
const router = express.Router()


router.get("/" , async (req,res)=>{
    try {
        await Product.find()
        .then(i=>{
            res.status(200).send(i)
        })
        
    } catch (e) {
        throw new Error(e)
    }
})



router.get('/:id' ,async (req , res)=>{
    const id = req.params.id
    try {
        const product =await  Product.findById({_id:id})
        res.status(200).send(product)
        
    } catch (e) {
        throw new Error(e)
    }
    
    
})

router.put('/:id' , async (req,res)=>{
    try {
            await  Product.findByIdAndUpdate({_id:id} , {
                id:req.body.id,
                title:req.body.title,
                price:req.body.price,
                image:req.body.image,
                description:req.body.description,
                rating:req.body.rating,
                category:req.body.category,
                comments:req.body.comments
    
            })  
            .then(i=>res.status(200).send())
    } catch (e) {
        throw new Error(e)
    }
    const id = req.params.id
        

})

router.delete('/:id' , async(req , res)=>{
    const id = req.params.id
    try {
        await Product.deleteOne({_id:id})
        res.status(200).send()
        
    } catch (e) {

        throw new Error(e)
    }
})




module.exports = router