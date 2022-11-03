const path=require('path')
const express=require('express')
const app=express()

const adminRouters=require('./routes/admin')
const shopRouters=require('./routes/shop')
const formRouters=require('./routes/form')
const successRouter=require('./routes/success')

app.use(express.static(path.join(__dirname,'stylesheet')))

app.use('/admin',adminRouters)
app.use(shopRouters)
app.use('/contact',formRouters)
app.use('/success',successRouter)


app.use((req,res,next)=>{
     res.status(404).sendFile(path.join(__dirname,'view','404.html'))
})
app.listen(3000)