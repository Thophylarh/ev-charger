import React from "react";
import Dot from  "../../assets/svg/activeDot.svg";
import dropDown from "../../assets/svg/dropDownArrow.svg"
import BackArrow from "../../assets/svg/backArrow.svg";
import Chart from "../Chart/lineChart";
import Doughnut  from "../../assets/images/Doughnut.png";


const evChargers = () => {
    return (<div>
        <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[2rem]">
            <div className="flex ">
            <img className="pr-[1rem]" src={BackArrow}></img>
            <h4 className="font-bold text-2xl pr-[2rem]">Tesla Charger</h4>
            <div className="flex justify-between w-16 rounded-full py-0.5  bg-green-100 px-2 font-semibold text-green-700 text-xs "><img className="w-1.5" src={Dot}/> Active</div>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light font-sm ">This month</p>
            <img src={dropDown}/>
           </div>
           
        </div>
        <div className="flex justify-between">
            <div className="w-[50.25rem] h-[28.5rem]">
                <div className="h-[18.25rem]">
                   
                    <Chart/>
                </div>
            </div>
            <div>
                <div className="w-[24.125rem] bg-black text-white">
                    <h3>356.67Kw</h3>
                    <p>Total energy consumption</p>
                </div>
                <div className="w-[24.125rem]" >
                    <img src={Doughnut}/>
                </div>
            </div>
        </div>
    </div>)
}


export default evChargers