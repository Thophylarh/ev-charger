import React from "react";
import Prev from "../../assets/svg/prev.svg";
import Next from "../../assets/svg/next.svg";
import Dot from  "../../assets/svg/activeDot.svg";
import RedDot from "../../assets/svg/red-dot.svg"
import Station from "../../assets/images/charging-station.png";



const listOfChargers = () => {
    return (<div>
        <div className="flex justify-between pt-6">
            <p className="text-gray-600  text-base font-semibold">List of chargers</p>
            <div className="flex justify-between">
            <img className="pr-8" src={Prev}/>
            <img className="pr-2" src={Next}/>
            </div>
        </div>

        <div className=" flex justify-between bg-white mt-6 p-[4rem] text-Grey-700">
            <div className="border rounded-lg p-[0.75rem] w-[21.25rem] h-[26.5rem] mr-4">
            <div className="flex justify-between ">
                <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">Tesla Charger 1</h3>
                <div className="flex justify-between w-24 rounded-full py-1  bg-green-100 px-3 font-semibold text-green-700"><img className="" src={Dot}/> Active</div>
            </div>
            <div  className="flex justify-center py-[5rem]">
               <img src={Station}></img>
            </div>
            <div className="text-sm font-normal ">
                <div className="flex justify-between pb-[1rem]">
                <p >Energy Consumed:</p>
                <p>560Kw</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Revenue: </p>
                <p>$560,000.00</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Last Charge: </p>
                <p>18mins ago</p>
                </div>
            </div>
            </div>

            {/* 2 */}
            <div className="border rounded-lg p-[0.75rem] w-[21.25rem] h-[26.5rem]  mr-4">
            <div className="flex justify-between">
                <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">Meta Charger </h3>
                <div className="flex justify-between w-24 rounded-full py-1  bg-green-100 px-3 font-semibold text-green-700"><img className="" src={Dot}/> Active</div>
            </div>
            <div  className="flex justify-center py-[5rem]">
               <img src={Station}></img>
            </div>
            <div className="text-sm font-normal">
                <div className="flex justify-between pb-[1rem]">
                <p >Energy Consumed:</p>
                <p>560Kw</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Revenue: </p>
                <p>$560,000.00</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Last Charge: </p>
                <p>18mins ago</p>
                </div>
            </div>
            </div>

            {/* 3 */}
            <div className="border rounded-lg p-[0.75rem] w-[21.25rem] h-[26.5rem] ">
            <div className="flex justify-between">
                <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">Keke Charger </h3>
                <div className="flex justify-between w-[8rem] rounded-full py-2  bg-[#FEF3F2] px-3 font-semibold text-[#B42318] text-xs mr-[0.25rem]"><img className="w-[0.5rem]" src={RedDot}/> Disconnected</div>
            </div>
            <div  className="flex justify-center py-[5rem]">
               <img src={Station}></img>
            </div>
            <div className="text-sm font-normal">
                <div className="flex justify-between pb-[1rem]">
                <p>Energy Consumed:</p>
                <p>560Kw</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Revenue: </p>
                <p>$560,000.00</p>
                </div>
                <div className="flex justify-between pb-[1rem]">
                <p>Last Charge: </p>
                <p>18mins ago</p>
                </div>
            </div>
            </div>
        </div>
        
    </div>  );
}
 
export default listOfChargers;

