const path=require('path')
const express=require('express')
const router=express.Router()
router.get('/add-product',(req,res,next)=>{
     res.sendFile(path.join(__dirname,'../','view','admin.html'))

})
router.post('/add-product',(req,res,next)=>{
     res.redirect('/')
})
router.post('/contact',(req,res,next)=>{
     res.redirect('/contact/us')
})

module.exports=router