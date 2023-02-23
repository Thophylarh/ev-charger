import React from "react";
import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../Hero/hero"
import ChargerStat from "../chargerStat/charger"
import ListOfChargers from "../listOfChargers/listOfChargers";

const index = () => {
  return (
    <div className="w-full h-screen py-2 px-4 ">
    <div className="w-full h-screen py-2 px-4 overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center">
          <div className=" font-bold font-2xl">
            <h1>Hello, Akinromade</h1>
          </div>
          <div className="flex justify-between items-center bg-black rounded-md  px-5 py-1">
            <p className=" text-white font-light font-sm ">This month</p>
            <div>
            <img className="w-[14px] " src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <p className="text-gray-400 font-thin font-sm pb-2">Explore your station dashboard here</p>
        <div>
         <Hero/>
        </div>
        <ChargerStat/>
        <ListOfChargers/>
      </div>
      
    </div>
    </div>
  );
};

export default index;
