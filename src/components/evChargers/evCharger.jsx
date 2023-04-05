import React from "react";
import dropDown from "../../assets/svg/dropDownArrow.svg";
import Charger from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"
import ChargerCard from "./chargerCards";


const evChargers = () => {
    return ( 
    <div className=" overflow-y-scroll h-screen pb-[2rem]">
        <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[1.5rem] ">
            <div className="flex">
            <h4 className="font-bold text-2xl ">Ev Chargers</h4>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-[1.25rem] py-[0.25rem]">
            <p className=" text-black font-light font-sm">This month</p>
            <img src={dropDown} alt=""/>
           </div>
        </div>

        
        <div className="grid grid-cols-4 pt-[1rem] px-[1.5rem]">
            <div className="w-[95%] bg-white flex justify-between px-[2rem] border border-gray-200 rounded-xl border-1">
                <div >
                <img className="w-[2.5rem] h-[3.5rem] mt-[3rem]" src={Charger} alt=""/>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-sm text-gray-400 ">Number of chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

            <div className="w-[95%] bg-white flex justify-between ml-[0.5rem]  px-[2rem] border border-gray-200 rounded-xl border-1 ">
                <img className="w-[2.5rem] h-[3.5rem] mt-[3rem]" src={ActiveCharger} alt=""/>

                <div className="flex flex-col justify-center items-center ">
                    <p className="font-normal text-sm text-gray-400">Active chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

             <div className=" w-[95%] bg-white flex justify-between ml-[1rem] px-[2rem] border border-gray-200 rounded-xl border-1">
                <img className="w-[2.5rem] h-[3.5rem] mt-[3rem]" src={OfflineCharger} alt=""/>

                <div className="flex flex-col justify-center items-center">
                    <p className="font-normal text-sm text-gray-400">Offline chargers</p>
                    <p className="font-normal text-4xl text-gray-900 pt-[1rem]">50</p>
                </div>

            </div>

            <div className="w-[92%] bg-gray-900 flex justify-between ml-[1.5rem] py-[2.5rem] px-[1rem] border border-gray-100 rounded-xl border-1">

                <div className=" flex flex-col justify-center items-center text-white">
                    <p className="font-normal text-4xl">356.57Kw</p>
                    <p className="pt-[0.5rem]">Total energy consumption</p>
                </div>

            </div>
        </div>

        <div className="pl-[1.5rem] py-[1.5rem] font-semibold text-gray-600 text-base"> <p>Ev Charger Statistics</p></div>

        <section className="pl-[1.5rem]">
        <div className="grid grid-cols-3 pb-[2rem]">
            <ChargerCard status={true} charger="Tesla charger" />
            <ChargerCard status={true} charger="Meta charger"/>
            <ChargerCard status={false} charger="Innoson charger"/>
        </div>

        <div className="grid grid-cols-3">
            <ChargerCard status={true} charger="Tesla charger"/>
            <ChargerCard status={true} charger="Meta charger"/>
            <ChargerCard status={false} charger="Innoson charger"/>
        </div>
        </section>
        
    </div>
     );
}
 
export default evChargers;