// const express=require('express')
// const path=require('path')
// const app=express()

// app.use(express.static(path.join(__dirname,'public')))
// app.get("/test",(req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })

// const PORT=3000
// app.listen(PORT,()=>console.log(`Server is running at ${PORT}`)

const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("hi this is the get request ")
})


app.post("/",(req,res)=>{
    res.send("hi this is the post request")
})


const PORT=3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))