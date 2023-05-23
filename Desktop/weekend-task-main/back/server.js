const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const bodyParser = require("body-parser")
dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())
const DB=process.env.DB_URL
mongoose.connect(DB)
const {Schema}=mongoose
const ToySchema=new Schema({
image:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
}
},{timestamps:true})
const Teddy = mongoose.model("teddy", ToySchema)
//Get
app.get("/users",async(req,res)=>{
    const user=await Teddy.find({})
    res.send(user)
})
//Post
app.post("/users",async(req,res)=>{
    const getId=req.body
    const posted=await new Teddy(getId)
    posted.save()
    res.send(posted)
})
//Delete
app.delete("/users/:id",async(req,res)=>{
    const getId=req.params.id
    const deleted=await Teddy.findByIdAndDelete(getId)
    res.send(deleted)
})
const Port=process.env.PORT
app.listen(Port,()=>{
    console.log(`Server is up${Port}`);
})