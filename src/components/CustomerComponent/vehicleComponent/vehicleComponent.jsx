import React, { useState, useEffect } from "react";
import ActiveCar from "../../../assets/svg/activeCar.svg";
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import axios from "../../../lib/axiosInterceptor";
import { useSearchParams, useNavigate  } from "react-router-dom";
import addPlus from "../../../assets/svg/addPlus.svg"

import Loader from "../../../components/Loader";

const VehicleComponent = ({ vehicleDetails, Vtransactions, isLoading }) => {
  const [searchParams] = useSearchParams();
  console.log(Vtransactions)

  const navigate = useNavigate();

  const addVehicle = () =>{
    navigate({
        pathname: '/addVehicle'
      });

  }

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section className="w-[90%] mx-auto pt-[28px]">
          {/* <VehicleCard vehicle={vehicleDetails}/> */}
          <div className="flex justify-end w-100% mb-[1rem]">
          <div className="flex justify-between text-center" onClick={addVehicle}>
              <img src={addPlus} alt="add vehicle"></img> <p className="text-[#15833C] ml-[0.5rem]">Add Vehicle</p> 
            </div>
            </div>

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
            {Vtransactions?.length > 0 &&
              Vtransactions.map((Vtransaction) => {
                <TransactionCard VTransaction={Vtransaction} />;
              })}

            {(Vtransactions?.length < 1 || !Vtransactions)  && (
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
