const path=require('path')
const express=require('express')
const router=express.Router()
router.get('/us',(req,res,next)=>{
     res.sendFile(path.join(__dirname,'../','view','form.html'))

})
router.post('/us',(req,res,next)=>{
     res.redirect('/success')
})

module.exports=router