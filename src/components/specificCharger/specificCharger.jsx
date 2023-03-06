import React from "react";
import Dot from  "../../assets/svg/activeDot.svg";
import dropDown from "../../assets/svg/dropDownArrow.svg"
import BackArrow from "../../assets/svg/backArrow.svg";
import Chart from "../Chart/lineChart";
import Doughnut  from "../../assets/images/Doughnut.png";
import Transactions from "../last10Transactions/transactions";


const specificCharger = () => {
    return (<div className="w-full h-screen overflow-y-scroll">
        <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[2rem] ">
            <div className="flex ">
            <img className="pr-[1rem]" src={BackArrow}></img>
            <h4 className="font-bold text-2xl pr-[2rem]">Tesla Charger</h4>
            <div className="flex justify-between w-[5rem] rounded-full py-2  bg-green-100 px-3 font-semibold text-green-700 text-xs"><img className="w-[0.5rem]" src={Dot}/> Active</div>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light font-sm ">This month</p>
            <img src={dropDown}/>
           </div>
        </div>

        <div className="flex justify-between pl-[1.5rem] pt-[1.5rem]" >
            <div className="bg-white h-full py-[2rem] pl-[2.5rem] pr-[1.25rem]">
                <div className="h-[18.25rem] w-[45.938rem]">
                    <p className="text-gray-400 text-sm font-normal">Charger Revenue Summary</p>
                    <Chart/>
                </div>
            </div>
            <div className="px-[2rem] ">
                <div className=" bg-[#101828] text-white flex flex-col justify-center items-center  ">
                    <h3 className="font-normal text-4xl pt-[40px] mx-[3.5rem] ">356.67Kw</h3>
                    <p className="font-normal text-sm pb-[48px]">Total energy consumption</p>
                </div>
                <div  className="pt-[0.75rem] ">
                    <img className="bg-white px-[3.5rem] py-[0.5rem]" src={Doughnut}/>
                </div>
            </div>
        </div>
        <div className="px-[1.5rem]">
        <Transactions/>
        </div>
    </div>)
}


export default specificCharger