import PlusInBox from "../../assets/svg/plusInBox.svg";
import Modal from "./modal";

const OperationHours = () => {
  return (
    <>
      <div>
        <h6 className="font-bold leading-6 text-lg text-gray-900">
          Operation Hours
        </h6>
        <p className="text-sm  text-[#667084] leading-5 font-normal pt-[0.5rem]">
          Select an operation method for this charger
        </p>
      </div>
      <div className="border mt-[2rem] border-[#D9DBE0] border-1 rounded-xl border-solid flex justify-between">
        <div className="pt-[1.25rem] pl-[2rem] w-[15rem] pb-[1.25rem]">
          <h6 className="font-semibold text-base leading-5  text-[#001755]">
            Default Operation
          </h6>
          <p className=" text-xs text-[#001755] font-semibold leading-5 pt-[0.5rem]">
            Charger works within the station operations
          </p>
        </div>
        <div className="pt-[1.25rem] pr-[1.25rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
          </label>
        </div>
      </div>
      <div className="border mt-[0.5rem] border-[#D9DBE0] border-1 rounded-xl border-solid flex justify-between">
        <div className="pt-[1.25rem] pl-[2rem] w-[20rem] pb-[1.25rem]">
          <h6 className="font-semibold text-base leading-5  text-[#001755]">
            Morning shift
          </h6>
          <p className=" text-xs text-[#001755] font-semibold leading-5 pt-[0.5rem]">
            Operation time: 09:00AM - 3:00PM
          </p>
        </div>
        <div className="pt-[1.25rem] pr-[1.25rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
          </label>
        </div>
      </div>
      <div className="border mt-[0.5rem] border-[#D9DBE0] border-1 rounded-xl border-solid flex justify-between">
        <div className="pt-[1.25rem] pl-[2rem] w-[20rem] pb-[1.25rem]">
          <h6 className="font-semibold text-base leading-5  text-[#001755]">
            Custom Shift
          </h6>
          <p className=" text-xs text-[#001755] font-semibold leading-5 pt-[0.5rem]">
            Operation time: 03:00AM - 1:00PM
          </p>
        </div>
        <div className="pt-[1.25rem] pr-[1.25rem]">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
          </label>
        </div>
      </div>

      <div className="pt-[1rem]">
        <button className="border border-1 border-solid flex  w-[10rem]  p-[0.5rem] rounded-md ">
          <img src={PlusInBox} className="pr-[0.5rem]"></img>Add new shift
        </button>
      </div>
    </>
  );
};

export default OperationHours;
