const express =require('express')
const mongoose =require('mongoose');
const ApiRoutes = require('./Routes/ApiRoutes');

const MONGODBURI ="mongodb://127.0.0.1:27017/batch8thjan"
const cors =require("cors")
const app =express();

app.use(cors())

app.use(express.json())//enable all incoming json data
app.use(express.urlencoded({extended:false})) // allow raw post data to convert js object


app.use("/",ApiRoutes)
 
 mongoose.connect(MONGODBURI).then(()=>{
 app.listen(3003,()=>{
  console.log("server running at 3003")
 })
})
