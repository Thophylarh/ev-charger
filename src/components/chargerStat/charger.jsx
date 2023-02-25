import React from "react";
import Charger from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"
import Battery from "../../assets/images/battery.png"

function charger() {
  return (
    <div>
      <div className="flex justify-between items-center pt-4">
        <p className="text-gray-600 text-base font-semibold">Ev charger statistics</p>
        <p className="text-gray-600 text-base font-semibold">
          Station energy consumption
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="col-span-2 flex justify-between items-center bg-white p-12">
          <div className=" border border-gray-50 border-1 rounded-md p-8 flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[40px] self-center" src={Charger} alt="" />
            </div>
            <div className="text-gray-400 font-sm font-thin">Number of chargers</div>
            <h4 className="pt-2  text-gray-900 font-black">50</h4>
          </div>
          <div className=" p-8  border border-gray-50 border-1 rounded-md flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[40px]" src={ActiveCharger} alt="" />
            </div>
            <div className="text-gray-400 font-sm font-thin">Active Chargers</div>
            <h4 className="pt-2  text-gray-900 font-black">48</h4>
          </div>
          <div className=" border border-gray-50 border-1 rounded-md p-8  flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[40px]" src={OfflineCharger} alt="" />
            </div>
            <div className="text-gray-400 font-sm font-thin">Offline Chargers</div> 
            <h4 className="pt-2 text-gray-900 font-black">2</h4>
          </div>
        </div>
        <div className="col-span-1">
            <div className="bg-[#101828] h-full">
                <div className="flex flex-col justify-center items-center">
                    <img className="h-[8rem] mt-12" src={Battery} alt="" />
                    <div className="font-bold text-2xl text-white">
                    <h1>356.67 Kw</h1>
                    </div>
                    <div className="text-gray-400 font-xs font-thin">
                    <p>Current consumption</p>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default charger;
