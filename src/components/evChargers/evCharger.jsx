import React from "react";
import dropDown from "../../assets/svg/dropDownArrow.svg";
import Charger from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"
import ChargerCard from "./chargerCards";


const evChargers = () => {
    return ( 
    <div className=" overflow-y-scroll h-screen">
        <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[1.5rem] ">
            <div className="flex">
            <h4 className="font-bold text-2xl ">Ev Chargers</h4>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light font-sm ">This month</p>
            <img src={dropDown}/>
           </div>
        </div>

        
        <div className="grid grid-cols-4 pt-4 px-[1.5rem]">
            <div className="bg-white flex justify-between  py-[2.5rem] px-[2rem]">
                <div >
                <img className="w-[2.5rem] h-[4rem]" src={Charger}/>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-sm text-gray-400 ">Number of chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

            <div className="bg-white flex justify-between ml-[2rem]  py-[2.5rem] px-[2rem]">
                <img className="w-[2.5rem] h-[4rem]" src={ActiveCharger}/>

                <div className="flex flex-col justify-center items-center ">
                    <p className="font-normal text-sm text-gray-400">Active chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

             <div className="bg-white flex justify-between ml-[2rem]  py-[2.5rem] px-[2rem]">
                <img className="w-[2.5rem] h-[4rem]" src={OfflineCharger}/>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-sm text-gray-400">Offline chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

            <div className="bg-gray-900 flex justify-between ml-[2rem]   py-[2.5rem] px-[2rem]">

                <div className="flex flex-col justify-center items-center text-white">
                    <p className="font-normal text-4xl">356.57Kw</p>
                    <p className="pt-[0.5rem]">Total energy consumption</p>
                </div>

            </div>
        </div>

        <div className="pl-[1.5rem] py-[1.5rem] font-semibold text-gray-600 text-base"> <p>Ev Charger Statistics</p></div>

        <section className="pl-[1.5rem]">
        <div className="grid grid-cols-3 pb-[2rem]">
            <ChargerCard/>
            <ChargerCard/>
            <ChargerCard/>
        </div>

        <div className="grid grid-cols-3">
            <ChargerCard/>
            <ChargerCard/>
            <ChargerCard/>
        </div>
        </section>
        
    </div>
     );
}
 
export default evChargers;