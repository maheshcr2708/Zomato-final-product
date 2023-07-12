   const menuitemModel = require('../Model/menuitemsModel')
const restuarantModel =require('../Model/restuarantModel')  

  
module.exports.getrestuarantListbyLocationId = async (request,response)=>{
  let { loc_id }=request.params
  try {
    const {page =1 ,limit =5} =request.query;
    let filter ={location_id:loc_id}
    let projection ={name:1,city:1,_id:0,location_id:1,city_id:1,locality:1,image:1}
    
    let restuarantList = await restuarantModel.find(filter,projection).limit(limit *1).skip((page -1)*limit)
   let sendData ={status :restuarantList.length == 0 ?false :true,
   restuarantList,
  count:restuarantList.length}
   response.status(200).send(sendData)
  
  } catch(error){
    let errObj ={status:false,error}
    response.status(500).send(errObj)
  }
  }


  
  module.exports.getrestuarantDetailsbyrestuarantId = async (request,response)=>{
    let { id }=request.params
    try {
     
     
      let restuarantList = await restuarantModel.findById(id)
     let sendData ={status :restuarantList.length == 0 ?false :true,
     restuarantList,
    count:restuarantList.length}
     response.status(200).send(sendData)
    
    } catch(error){
      let errObj ={status:false,error}
      response.status(500).send(errObj)
    }
    }
  
  
    
    
  module.exports.getmenuItemsbyrestuarantId = async (request,response)=>{
    let {r_id} =request.params
   try{
   
   let menuItemsList =await menuitemModel.find({restaurantId :r_id})
   let sendData =
     {status:menuItemsList.length === 0 ? false : true,
    menuItemsList,
   count :menuItemsList.length}
   response.status(200).send(sendData)
    } catch(error){
      let errObj ={status:false,error}
      response.status(500).send(errObj)
    }
    }
  

    module.exports.filter =async (request,response) =>{
     
      try {
        let {mealType,loc_id,lcost,hcost ,sort ,page ,cuisine}= request.body;
           page = page ? page : 1;

        let itemsperPage =2
       
        let startIndex =itemsperPage * page - itemsperPage ;//2*3 -2 =4,
        let endIndex =itemsperPage * page ; //2 *3 =6
        let filter ={}
        if(mealType !== undefined) filter["mealtype_id"] =mealType
        if(loc_id !== undefined) filter["location_id"] =loc_id
        
         
        if(lcost !== undefined && hcost !==undefined){
          
          filter["min_price"] ={$lt: hcost ,$gt:lcost }
        }
         
        if(cuisine != undefined) filter["cuisine_id"] = {$in :cuisine}
         let restuarantList = await restuarantModel.find(filter).sort({
          min_price:sort
         })
         let sendData ={status :restuarantList.length == 0 ?false :true,
         restuarantList,
        count:restuarantList.length}
         response.status(200).send(sendData)
        
      } catch (error) {
        let errObj ={status:false,error}
      response.status(500).send(errObj)
      }
    }