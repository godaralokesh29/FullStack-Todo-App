const mongoose=require("mongoose")
const express=require("express")
const app=express()

app.use(express.json)

mongoose.connect(//Your mongo DB string paste here)  


const todoSchema=mongoose.Schema({
   title:String,
   description:String,
   completed:Boolean,

})

const todo = mongoose.model('todos', todoSchema)


module.exports={
    todo:todo

}














