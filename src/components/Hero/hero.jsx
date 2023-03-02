import React from "react";
import Profit from "../../assets/svg/profit.png";
import LineChart from "../Chart/lineChart";

function hero() {
  return (
    <div>
      <div className="grid grid-cols-3   ">
        <div className="col-span-1 bg-[#fff] p-6 border-r">
          <div className=" border-b">
            <div className="pb-4">
              <p className="text-gray-400 font-normal text-sm">Total revenue</p>
            </div>
            <div className="pb-2">
              <h1 className="font-bold text-2xl text-gray-900">$800,000.00</h1>
            </div>
            <div className="flex items-center gap-2 pb-4">
              <div className="text-sm text-gray-600 font-normal">22%</div>
              <img src={Profit} alt="" />
            </div>
          </div>
          <div className=" border-b">
            <div className="pb-3 mt-[1.5rem]">
              <p className="text-gray-400 font-normal text-sm">
                Revenue based on time
              </p>
            </div>
            <div className="pb-2">
              <h1 className="font-bold text-2xl text-gray-900">$550,000.00</h1>
            </div>
            <div className="flex items-center gap-2 pb-4">
              <div className="text-sm text-gray-600 font-normal">22%</div>
              <img src={Profit} alt="" />
            </div>
          </div>
          <div className=" ">
            <div className="pb-3 mt-[1.5rem]">
              <p className="text-gray-400 font-normal text-sm ">
                Revenue based on energy
              </p>
            </div>
            <div className="pb-2">
              <h1 className="font-bold text-2xl text-gray-900">$550,000.00</h1>
            </div>
            <div className="flex items-center gap-2 pb-4">
              <div className="text-sm text-gray-600 font-normal">22%</div>
              <img src={Profit} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-[#fff] p-6 ">
            <div className="text-sm text-gray-400 font-normal">
                <p>Revenue Summary</p>
            </div>
          <div className="h-[18rem]">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
