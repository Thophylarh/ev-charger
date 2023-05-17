import { useState } from "react";

const BillingModal = () => {
  return (
    <>
      <div>
        <h6 className="font-bold leading-6 text-lg text-gray-900">
          Billing Type
        </h6>
        <p className="text-sm  text-[#667084] leading-5 font-normal pt-[0.5rem]">
          Select how you want this charger to bill
        </p>
      </div>
      <div className="border mt-[2rem] border-[#D9DBE0] border-1 rounded-xl border-solid flex justify-between">
        <div className="pt-[1.25rem] pl-[2rem] w-[15rem] pb-[1.25rem]">
          <h6 className="font-semibold text-base leading-5  text-[#001755]">
            Bill By Energy
          </h6>
          <p className=" text-xs text-[#001755] font-semibold leading-5 pt-[0.5rem]">
            This charger will bill by energy in Kilowatt
          </p>
        </div>
        <div className="pt-[1.25rem] pr-[1.25rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
          </label>
        </div>
      </div>

      <div className="border mt-[0.5rem] border-[#D9DBE0] border-1 rounded-xl border-solid flex justify-between">
        <div className="pt-[1.25rem] pl-[2rem] w-[15rem] pb-[1.25rem]">
          <h6 className="font-semibold text-base leading-5  text-[#001755]">
            Bill By Type
          </h6>
          <p className=" text-xs text-[#001755] font-semibold leading-5 pt-[0.5rem]">
            This charger will bill using time (minutes)
          </p>
        </div>
        <div className="pt-[1.25rem] pr-[1.25rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default BillingModal;
