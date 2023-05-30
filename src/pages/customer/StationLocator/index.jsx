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

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({
      latitude,
      longitude,
    });

    if (latitude && longitude) {
      //   getStationLocator();
    }
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
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
                Sterling Hq marina
              </h6>
            </div>

            <div>
              <p className={` text-sm text-sm text-[#B27203] font-bold`}>
                Change location
              </p>
            </div>
          </section>

          <section
            className={`bg-[var(--grey10)] h-[4rem]   flex justify-between`}
          >
            <div
              className={`w-[100%]  h-[100%] cursor-pointer  ${
                enrolled
                  ? " border-b-4 border-black "
                  : " border-b-4 border-[#E2E2E2)]"
              }  text-center font-semibold`}
              onClick={() => setEnrolled(true)}
            >
              <h1
                className={` text-sm pt-[1.25rem] ${
                  enrolled ? " text-black" : "text-[var(--grey500)]"
                }`}
              >
                List View
              </h1>
            </div>
            {/* 
				<div
					className={`w-[50%] cursor-pointer   h-[100%]  ${
						!enrolled
							? " border-b-4 border-black "
							: " border-b-4 border-[#E2E2E2)]"
					} text-center font-semibold`}
					onClick={() => setEnrolled(false)}
				>
					<h1
						className={`text-sm pt-[1.25rem] ${
							!enrolled ? " text-black" : "text-[var(--grey500)]"
						}`}
					>
						Map View
					</h1>
				</div> */}
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
