const ApiRoutes =require('express').Router()
const LocationControler =require('../Controlers/LocationControler')
const restuarantControler =require("../Controlers/restuarantControler")
const mealTypeControler =require("../Controlers/mealTypeControler")

const PaymentControler =require("../Controlers/PaymentControler")

ApiRoutes.get("/api",LocationControler.home)
ApiRoutes.get("/api/get-location-list",LocationControler.getLocationList)
ApiRoutes.get("/api/get-restuarantList-by-location-id/:loc_id",restuarantControler.getrestuarantListbyLocationId)
ApiRoutes.get("/api/get-restuarant-details-by-restuarant-id/:id",restuarantControler.getrestuarantDetailsbyrestuarantId)

ApiRoutes.get("/api/get-menuitems-by-restuarantId/:r_id",restuarantControler.getmenuItemsbyrestuarantId)
ApiRoutes.get("/api/get-mealtype-restuarants",mealTypeControler.getMealtypeRestuarant)
ApiRoutes.post("/api/filter",restuarantControler.filter)
ApiRoutes.post("/api/gen-order-details",PaymentControler.genOrderDetails);
ApiRoutes.post("/api/verify-payment", PaymentControler.verifyPayment);

module.exports =ApiRoutes;