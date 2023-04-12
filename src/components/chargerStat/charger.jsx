import React, {useState, useEffect} from "react";
import Chargers from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"
import Battery from "../../assets/images/battery.png"
import axios from "axios";

function Charger(props) {
 

  // const url = "http://evapi.estations.com";

  //   const token = localStorage.getItem("token");
 



 



  
  // useEffect(()=>{
  //   GetstationChargers();
  //   GetofflineChargers();
  //   GetTotalEnergy();
  //   GetactiveChargers();
  // }, [])

  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <p className="text-gray-600 text-base font-semibold">Ev charger statistics</p>
        <p className="text-gray-600 text-base font-semibold">
          Company energy consumption
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 flex justify-between items-center bg-white p-12">
          <div className=" border border-gray-50 border-1 rounded-md p-8 flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem] self-center" src={Chargers} alt="" />
            </div>
            <div className="text-gray-400 text-base font-normal">Number of chargers</div>
            <h4 className="pt-2  text-gray-900 text-2xl font-bold">{props.total}</h4>
          </div>
          <div className=" p-8  border border-gray-50 border-1 rounded-md flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem]" src={ActiveCharger} alt="" />
            </div>
            <div className="text-gray-400 text-base font-normal">Active Chargers</div>
            <h4 className="pt-2  text-gray-900 text-2xl font-bold">{props.ActiveChargers}</h4>
          </div>
          <div className=" border border-gray-50 border-1 rounded-md p-8  flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem]" src={OfflineCharger} alt="" />
            </div>
            <div className="text-gray-400  text-base font-normal">Offline Chargers</div> 
            <h4 className="pt-2 text-gray-900 text-2xl font-bold">{props.OfflineChargers}</h4>
          </div>
        </div>
        <div className="col-span-1">
            <div className="bg-[#101828] h-full">
                <div className="flex flex-col justify-center items-center">
                    <img className="h-[8rem] mt-12" src={Battery} alt="" />
                    <div className="font-normal text-4xl text-white pt-[1.25rem]">
                    <h1>{props.TotalEnergy.toLocaleString()} kw</h1>
                    </div>
                    <div className="text-gray-400 text-sm font-normal pt-[0.5rem]">
                    <p>Current consumption</p>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Charger;
