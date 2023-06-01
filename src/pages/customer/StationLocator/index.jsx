import React, { useEffect, useState } from "react";
import locationIcon from "../../../assets/svg/locationIcon.svg";
import StationAccordion from "../../../components/CustomerComponent/StationAccordion";
import { toast } from "react-toastify";
import axios from "../../../lib/axiosInterceptor";
import Loader from "../../../components/Loader";

export default function StationLocator() {
  const [enrolled, setEnrolled] = useState(true);
  const [location, setLocation] = useState(null);
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();

      setAddress(`${data.address.city ? data.address.city : ""}, ${data.address.state}`);
      
    } catch (error) {
      console.log("Error getting address:", error);
    }
  };

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({
      latitude,
      longitude,
    });

    if (latitude && longitude) {
      //  getStationLocator();
    }
    getAddressFromCoordinates(latitude, longitude);
  }

  function error() {
    toast.error("Unable to retrieve your location");
    console.log("Unable to retrieve your location");
  }

  const getStationLocator = () => {
    setIsLoading(true);
    const data = {
      userState: "lagos",
      userLatitude: location?.latitude,
      userLongitude: location?.longitude,
    };
    axios
      .post(`/Stations/get-stations-nearby`, data)
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

  useEffect(() => {
    getStationLocator();
  }, [location]);

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

            <div>
              <p className={` text-sm text-sm text-[#B27203] font-bold`}>
                Change location
              </p>
            </div>
          </section>

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
