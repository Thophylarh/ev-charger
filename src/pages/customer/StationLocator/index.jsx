import React, { useEffect, useState } from "react";
import locationIcon from "../../../assets/svg/locationIcon.svg";
import StationAccordion from "../../../components/CustomerComponent/StationAccordion";
import { toast } from "react-toastify";
import axios from "../../../lib/axiosInterceptor";
import Loader from "../../../components/Loader";
import Script from 'react-load-script';
import ChangeLocation from "../../../components/CustomerComponent/changeLocation";

export default function StationLocator() {
  const [enrolled, setEnrolled] = useState(true);
  const [location, setLocation] = useState(null);
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState(false);
  const [LoactionData, setLocationData] = useState()
  const [grantPermission, setGrantPermission] = useState()
  


  

  const getAddressFromCoordinates = async (latitude, longitude) => {

    console.log(latitude + "," + longitude)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      setAddress(`${data.address.suburb
        ? data.address.suburb
        : data.address.village}, ${data.address.state} `);

      
      
    } catch (error) {
      console.log("Error getting address:", error);
    }
  };

  // console.log(address)

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({
      latitude,
      longitude,
    });

    if (latitude && longitude) {
       getStationLocator(latitude, longitude);
    }
    getAddressFromCoordinates(latitude, longitude);
  }

  function error() {
    toast.error("Unable to retrieve your location");
    console.log("Unable to retrieve your location");
  }

  //data for station location from permission
 
  const data = {
    userState: "lagos",
    userLatitude: location?.latitude,
    userLongitude: location?.longitude,
  };





  const getStationLocator = (lat, long) => {
    setIsLoading(true);

    const Ndata = {
      userState: "lagos",
      userLatitude: lat,
      userLongitude: long,
    }
    

    axios
      .post(`/Stations/get-stations-nearby`, Ndata)
      .then((res) => {
        setStations(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, error);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, error);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            toast.info(
              "Kindly enable your location so we can show the stations closer to you"
            );
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  // useEffect(() => {
  //   getStationLocator();
  // }, [LoactionData]);



  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section className=" py-5">
          <section className="flex justify-between w-[90%] mx-auto mb-[var(--marginBtwElements)]">
            <div className="flex items-center">
              <img src={locationIcon} alt="Stations Locations" />
              <h6 className={`ml-2 text-sm text-[--grey900] font-bold`}>
                {address}
              </h6>
            </div>

            {/* <div>
              <p className={` text-sm text-sm text-[#B27203] font-bold`} onClick={()=>{setSearch(true)}}>
                Change location
              </p>
            </div> */}

           
          </section>
            {/* <div className="w-[80%] mx-auto"> */}
          {/* <button
           className=" border border-black border-2 w-[100%] mb-[10px] py-[1rem] rounded-md "
           onClick={()=>setGrantPermission(true)}
           >Find me</button>
          </div> */}

           <ChangeLocation setSearch={setSearch} setLocationData={setLocationData} getStationLocator={getStationLocator} 
           getAddressFromCoordinates={getAddressFromCoordinates}
           /> 

          <section>
            {stations?.map((station, index) => (
              <StationAccordion station={station} key={index} />
            ))}
          </section>
        </section>
      )}
    </>
  );
}
