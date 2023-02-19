
const express=require('express')
const app=express()

function mymiddleware (req,res,next){
    console.log("hi this is middleware")
    next()
}

app.use(mymiddleware)


app.get("/",mymiddleware,(req,res)=>{
    res.send("hi this is the get request ")
})

app.get('/test',mymiddleware,(req,res)=>{
    res.send("This is Test URL")
})

app.post("/",(req,res)=>{
    res.send("hi this is the post request")
})

app.put("/",(req,res)=>{
    res.send("hi this is the put request")
})

app.delete("/",(req,res)=>{
    res.send("hi this is the delete request")
})

const PORT=3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))