import {Routes,Route} from 'react-router-dom'
 
 import Home from './Components/Home'

 import Search from './Components/Search'
 import Restuarant from './Components/Restuarant'
import axios from 'axios'
import { useEffect ,useState } from "react";
import jwt_decode from "jwt-decode";

 function App (){

  let getUserDetails = () => {
    // #1 get data from localStorage
    let token = localStorage.getItem("zc_auth_token");
    if (token === null) {
      return null;
    } else {
      try {
        let data = jwt_decode(token);
        return data;
      } catch (error) {
        return null;
      }
    }
  };

  let [locationList ,setLocationList] = useState([])
 let [user ,setUser] =useState(getUserDetails)

  let getLocationList = async()=>{
    let url = "http://localhost:3003/api/get-location-list"
   let {data} = await axios.get(url)
   
   setLocationList(data.locationList)
 }


 useEffect(() => {
  getLocationList()
 console.log(user)
  // console.log("mounting");
}, []);
  return (
    <>
    <Routes>
    <Route path='/' element ={<Home  locationList={locationList}  user = {user} />} />
    <Route path='/search/:id/:name' element ={<Search  locationList={locationList} user={user} />} />
    <Route path='/restuarant/:id' element ={<Restuarant  user ={user} />}  />
    </Routes>

    </>
  )
 }

export default App