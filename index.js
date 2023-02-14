const express=require('express')
const path=require('path')
const app=express()

app.use(express.static(path.join(__dirname,'public')))
// app.get("/",(req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })

const PORT=3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
