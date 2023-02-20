
const express=require('express')
const uuid=require('uuid')
const app=express()

// function mymiddleware (req,res,next){
//     console.log("hi this is middleware")
//     next()
// }

// app.use(mymiddleware)


// app.get("/",mymiddleware,(req,res)=>{
//     res.send("hi this is the get request ")
// })

// app.get('/test',mymiddleware,(req,res)=>{
//     res.send("This is Test URL")
// })

// app.post("/",(req,res)=>{
//     res.send("hi this is the post request")
// })

// app.put("/",(req,res)=>{
//     res.send("hi this is the put request")
// })

// app.delete("/",(req,res)=>{
//     res.send("hi this is the delete request")
// })

const members=[{
    id:1,
    name:"John Doe",
    email:"john@gmail.com",
    status:"active"

},{
    id:2,
    name:"Jane Doe",
    email:"jane@gmail.com",
    status:"inactive"
},{
    id:3,
    name:"stevekruzz",
    email:"steve@gmail.com",
    status:"active"
}]
app.use(express.json())

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})
// show user
app.get("/showUser/:uid",(req,res)=>{
   const id=req.params.uid

   const user=members.filter(member=>member.id=== parseInt(id))
   user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"User Not Found"})
//    console.log(user)
//    res.status(200).json(user)
})
// add user
app.post('/addUser/',(req,res)=>{
    // const name=req.body.name
    // const email=req.body.email
    // const password=req.body.password
    const{email,name,password}={...req.body}
    members.push({id:uuid.v4(),name,email})
    res.status(200).json(members)
})


const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))