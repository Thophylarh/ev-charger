import React, { useState, useEffect } from "react";
import ActiveCar from "../../../assets/svg/activeCar.svg";
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import axios from "../../../lib/axiosInterceptor";
import { useSearchParams } from "react-router-dom";


import Loader from "../../../components/Loader";

const VehicleComponent = () => {
  const [searchParams] = useSearchParams();
  const [vehicleDetails, setVehicleDetails] = useState();
  const [Vtransactions, setVTransactions] = useState();

  const [isLoading, setIsLoading] = useState(false);
  let vehicleId = searchParams.get("vehicleId");

  let vehicleCode = searchParams.get("vehicleCode");

  //vehicle details
  const getDetails = () => {
    setIsLoading(true);
    axios
      .get(
        `/Customers/get-customer-vehicle-details-by-vehiclecode/${vehicleCode}`
      )
      .then((res) => {
        // console.log(res)
        setVehicleDetails(res.data.vehicleDetails[0]);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  //vehicle transactions
  const transactions = () => {
    axios
      .get(
        `/Customers/get-customer-vehicle-transactions/${vehicleId}/${vehicleCode}`
      )
      .then((res) => {
        setVTransactions(res.data)
      });
  };

  useEffect(() => {
    getDetails();
    transactions();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section className="w-[90%] mx-auto pt-[28px]">
          {/* <VehicleCard vehicle={vehicleDetails}/> */}

          <section className=" mb-[20px] ">
            <div className="p-[1px] border-2 border-[#6DDCFF]  rounded-lg">
              <section className="w-full h-full p-[16px] bg-white ">
                <img src={ActiveCar} alt="Car" />

                <div className="mt-[12px] flex justify-between mb-[12px]">
                  <h2 className="text-[#667085] font-semibold text-xs">
                    {vehicleDetails?.VehicleName?.toUpperCase()}
                  </h2>
                  <h2 className="text-[#667085] font-semibold text-xs">
                    {vehicleDetails?.PlateNumber}
                    {console.log(vehicleDetails)}
                  </h2>
                </div>
                <hr />
                <div className="mt-[20px] flex justify-between">
                  <h4 className="text-[#667085]font-normal text-xs">
                    Money spent:
                  </h4>
                  <h3 className="text-[#475467] font-semibold text-sm">
                    NGN {vehicleDetails?.AmountSpent}.00
                  </h3>
                </div>
                <div className="mt-[20px] flex justify-between">
                  <h4 className="text-[#667085]font-normal text-xs">
                    Energy consumed:
                  </h4>
                  <h3 className="text-[#475467] font-semibold text-sm">
                    {vehicleDetails?.EnergyConsumed}Kw
                  </h3>
                </div>
              </section>
            </div>
          </section>

          <section className="mt-[20px]">
            <h3 className="mb-[12px]">Charge history</h3>
            {Vtransactions?.length > 0 && (
              Vtransactions.map((Vtransaction)=>{
                <TransactionCard VTransaction={Vtransaction}/>
              })
            )}

            {Vtransactions?.length < 1 && (
               <div>
               <h3 className="text-sm text-center mt-10 w-[70%] mx-auto">
                 {" "}
                 You have made no transaction at the moment
               </h3>
             </div>
            )}

            
          </section>
        </section>
      )}
    </>
  );
};

export default VehicleComponent;
