import React from "react";
import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../Hero/hero"
import ChargerStat from "../chargerStat/charger"
import ListOfChargers from "../listOfChargers/listOfChargers";
import Transactions from "../last10Transactions/transactions";

const index = () => {
  return (
    <div className="w-full h-screen py-2 px-4 ">
    <div className="w-full h-screen py-2 px-4 overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Hello, Akinromade</h1>
          </div>
          <div className="flex w-[10rem] justify-between items-center bg-black rounded-md  px-5 py-1">
            <p className=" text-white font-light text-base ">This month</p>
            <img className="" src={Arrow} alt="" /> 
            
          </div>
          
        </div>
        <p className="text-gray-400 font-normal text-sm  ">Explore your station dashboard here</p>
        <div className="mt-[1rem]">
         <Hero/>
        </div>
        <ChargerStat/>
        <ListOfChargers/>
        <Transactions/>
      </div>
      
    </div>
    </div>
  );
};

export default index;
