import React, {useState, useEffect} from "react";
import Script from 'react-load-script';
import axios from "axios";


const ChangeLocation = ({setSearch, setLocationData, getStationLocator, getAddressFromCoordinates}) => {
    const [city, setCity] = useState()
    const [location, setLocation] = useState()

    const key = process.env.REACT_APP_GOOGLEMAP_API

   

    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`,
      
     
    };


    const getLocation  = () =>{

    axios(config)
    .then(function (response) {
    //   console.log(response.data.results[0].geometry.location.lat);
      setLocation(response?.data.results[0].geometry.location)
      setSearch(true)
      setLocationData(response.data.results[0].geometry.location)
      getStationLocator(response?.data?.results[0].geometry.location.lat, response?.data?.results[0].geometry.location.lng);
      getAddressFromCoordinates(response?.data?.results[0].geometry.location.lat, response?.data?.results[0].geometry.location.lng)
      
    })
    .catch(function (error) {
      console.log(error);
    });

    

    }

   

   

     
    // const googleLocation = ()=>{
    //     axios.get(`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places` ).then(
    //         (res) =>{
    //             // handleScriptLoad()
    //             console.log(res)
    //         }
    //     )
    // }

    // let autocomplete;

//    const handleScriptLoad = () => { 
//         // Declare Options For Autocomplete 
//         const options = { types: ["(cities)"] }; 
        
//         // Initialize Google Autocomplete 
//         /*global google*/
//         autocomplete = new google.maps.places.Autocomplete(
//                               document.getElementById("autocomplete"),
//                               options );
//         // Avoid paying for data that you don't need by restricting the 
//         // set of place fields that are returned to just the address
//         // components and formatted address
//         autocomplete.setFields(['address_components',   
//                                      'formatted_address']);
//         // Fire Event when a suggested name is selected
//         autocomplete.addListener("place_changed",
//                                       handlePlaceSelect()); 
//       }

    //  const  handlePlaceSelect = () => {

    //     // Extract City From Address Object
    //     const addressObject = autocomplete.getPlace();
    //     const address = addressObject.address_components;
    
    //     // Check if address is valid
    //     setCity(address)
    //   }

    return ( 
        <div className="w-[90%] mx-auto flex justify-between">
             
        <input 
        id="autocomplete"
        // value={city}
        className="w-[70%] border border-black border-2 rounded-lg pl-[10px] py-[0.75rem]"
         placeholder="Enter location"
         value={city}
         onChange={(event)=>{setCity(event.target.value)}}
         
         />
         <button onClick={getLocation} className="w-[25%] bg-black text-white rounded-md">search</button>

         
      </div>
    );
}
 
export default ChangeLocation;