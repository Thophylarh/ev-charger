import React, { useState, useEffect } from "react";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import Loader from "../../../components/Loader";

const MyVehicles = () => {
  const [searchParams] = useSearchParams();
  const [cDetails, setCDetails] = useState();
  const [Vehicles, setVehicles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  let customerId = searchParams.get("customerId");

  //get customer details
  const getDetails = () => {
    setIsLoading(true);

    axios.get(`/Customers/get-customer-by-id/${customerId}`).then((res) => {
      console.log(res);
      setCDetails(res.data.customerDetails);
      setVehicles(res.data.vehicleDetails);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  let style2 = {
    backgroundImage: `url(${InactiveCar})`,
    backgroundPosition: "120% bottom",
  };

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="w-[90%] mx-auto pt-[28px]">
          <section className="grid grid-cols-12 gap-2 mb-[var(--marginBtwSection)]">
            <div
              style={style2}
              className={` bg-no-repeat col-span-5 bg-[var(--grey50)] w-[100%] rounded-2xl py-4 px-4`}
            >
              <p className="text-xs mb-3 text-[var(--grey900)] font-medium">
                My vehicles
              </p>

              <h5 className="text-[1.125rem]   mb-3">
                {cDetails?.NumberOfVehiclesOnFile}
              </h5>
            </div>

            <div
              className={`col-span-7 bg-[var(--grey50)] w-[100%] rounded-lg py-4 px-4`}
            >
              <p className="text-xs mb-3 text-[var(--grey900)] font-medium">
                Money spent
              </p>

              <h5 className="text-[1.125rem]   mb-3">
                NGN {cDetails?.TotalAmountSpent}.00
              </h5>

              <p className="text-xs text-[var(--grey600)] font-bold">
                {cDetails?.TotalEnergyCharged} KW
              </p>
            </div>
          </section>

          {Vehicles?.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyVehicles;
