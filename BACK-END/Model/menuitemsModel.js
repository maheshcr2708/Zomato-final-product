const mongoose =require('mongoose')
const objectId =mongoose.Schema.Types.ObjectId
const menuitemSchema =new mongoose.Schema({
  name:{type:String},
  
  description:{type:String},

  
  ingridients:{type:Array},
  
  restaurantId:{type:objectId},
 
  image:{type:String},
  
  qty:{type:Number},
  
  price:{type:String},
  
})

const menuitemModel =mongoose.model("menuitem",  menuitemSchema,"menuItems")

module.exports =menuitemModel;