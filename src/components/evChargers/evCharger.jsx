import React from "react";
import dropDown from "../../assets/svg/dropDownArrow.svg";
import Charger from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"


const evChargers = () => {
    return ( 
    <div>
        <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[2rem] ">
            <div className="flex ">
            <h4 className="font-bold text-2xl ">Ev Chargers</h4>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light font-sm ">This month</p>
            <img src={dropDown}/>
           </div>
        </div>

        
        <div className="grid grid-cols-3 pt-4">
            <div className="bg-white flex justify-between w-[17rem] ">
                <img src={Charger}/>

                <div >
                    <p>Number of chargers</p>
                    <p>50</p>
                </div>

            </div>

            <div className="bg-white flex justify-between w-[17rem]">
                <img src={ActiveCharger}/>

                <div >
                    <p>Active chargers</p>
                    <p>50</p>
                </div>

            </div>
             <div className="bg-white flex justify-between w-[17rem]">
                <img src={OfflineCharger}/>

                <div >
                    <p>Offline chargers</p>
                    <p>50</p>
                </div>

            </div>
        </div>

        
    </div>
     );
}
 
export default evChargers;