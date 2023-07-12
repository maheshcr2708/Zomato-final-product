const MealtypeModel = require("../Model/mealTypeModel")


module.exports.getMealtypeRestuarant= async (request,response)=>{
try {
  let MealtypeList = await MealtypeModel.find()
 let sendData ={status :MealtypeList.length == 0 ?false :true,
  MealtypeList,
count:MealtypeList.length}
 response.status(200).send(sendData)

} catch(error){
  let errObj ={status:false,error}
  response.status(500).send(errObj)
}
}
