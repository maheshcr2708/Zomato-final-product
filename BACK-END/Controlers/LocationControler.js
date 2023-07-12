const LocationModel = require("../Model/Locations.Model")


module.exports.home =(request,response)=>{
response.send("home from controler")
}

module.exports.getLocationList= async (request,response)=>{

  const {page =1 ,limit =5} =request.query;
try {
  let locationList = await LocationModel.find().limit(limit *1).skip((page -1)*limit)
 let sendData ={status :locationList.length == 0 ?false :true,
 locationList,
count:locationList.length}
 response.status(200).send(sendData)

} catch(error){
  let errObj ={status:false,error}
  response.status(500).send(errObj)
}
}
