import React, { useState, useEffect } from "react";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import VehicleList from "../../../components/CustomerComponent/vehicleComponent/vehicleList";
import VehicleComponent from "../../../components/CustomerComponent/vehicleComponent/vehicleComponent";
import AddVehicle from "../AddVehicle";

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

    
      if (res.data.vehicleDetails?.length === 1) {
        console.log(  res.data.vehicleDetails?.[0]?.VehicleCode
          , "go")
        transactions(
          res?.data?.vehicleDetails?.[0]?.Id,
          res?.data?.vehicleDetails?.[0]?.VehicleCode

        );
        // console.log(res?.data?.VehicleDetails?.VehicleCode)
        getVehicleDetails(res?.data?.vehicleDetails?.[0]?.VehicleCode);
      }

   
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  //vehicle transactions
  const transactions = (vehicleId, vehicleCode) => {

    // const vehicleId = Vehicles?.Id;
    // const vehicleCode = Vehicles?.VehicleCode;

    console.log(vehicleId, "veh")
 
    axios
      .get(
        `/Customers/get-customer-vehicle-transactions/${customerId}/${vehicleCode}`
      )
      .then((res) => {
        setVTransactions(res.data);
      });
  };

  //vehicle details
  const getVehicleDetails = (code) => {
    setIsLoading(true);
    axios
      .get(
        `/Customers/get-customer-vehicle-details-by-vehiclecode/${code}`
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
          {Vehicles?.length === 0 && (
            <AddVehicle/>
          )}
        </>
      )}
    </>
  );
};

export default MyVehicles;
