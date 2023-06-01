import React, { useState, useEffect } from "react";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import VehicleList from "../../../components/CustomerComponent/vehicleComponent/vehicleList";
import VehicleComponent from "../../../components/CustomerComponent/vehicleComponent/vehicleComponent";

const MyVehicles = () => {
  const [searchParams] = useSearchParams();
  const [cDetails, setCDetails] = useState();
  const [Vehicles, setVehicles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [Vtransactions, setVTransactions] = useState();

  const [vehicleDetails, setVehicleDetails] = useState();

  let customerId = searchParams.get("customerId");

  //get customer details
  const getDetails = () => {
    setIsLoading(true);

    axios.get(`/Customers/get-customer-by-id/${customerId}`).then((res) => {
     
      setCDetails(res.data.customerDetails);
      setVehicles(res.data.vehicleDetails);

      console.log(  res.data.vehicleDetails)
      if (res.data.vehicleDetails?.length === 1) {
        transactions(
          res.data.vehicleDetails?.VehicleId,
          res.data.VehicleDetails?.VehicleCode
        );
        getVehicleDetails();
      }

   
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  //vehicle transactions
  const transactions = (vehicleId, vehicleCode) => {
    axios
      .get(
        `/Customers/get-customer-vehicle-transactions/${vehicleId}/${vehicleCode}`
      )
      .then((res) => {
        setVTransactions(res.data);
      });
  };

  //vehicle details
  const getVehicleDetails = () => {
    setIsLoading(true);
    axios
      .get(
        `/Customers/get-customer-vehicle-details-by-vehiclecode/${Vehicles?.VehicleCode}`
      )
      .then((res) => {
        setVehicleDetails(res.data.vehicleDetails[0]);
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
        <>
          {Vehicles?.length > 1 && (
            <VehicleList
              cDetails={cDetails}
              Vehicles={Vehicles}
              isLoading={isLoading}
            />
          )}
          {Vehicles?.length === 1 && (
            <VehicleComponent
              vehicleDetails={vehicleDetails}
              Vtransactions={Vtransactions}
              isLoading={isLoading}
            />
          )}
        </>
      )}
    </>
  );
};

export default MyVehicles;
