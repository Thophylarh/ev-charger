import React from "react";
import ActiveCar from "../../../assets/svg/activeCar.svg"

import "./styles.css"

const Vehicles = () =>{

    return (
        <section className="w-[90%] mx-auto pt-[28px]">
            
            <section className="GBorder">
            <section className="w-full h-full p-[16px] bg-white border">
                <img src={ActiveCar} alt="Car" />

                <div className="mt-[12px] flex justify-between mb-[12px]">
                    <h2 className="text-[#667085] font-semibold text-xs">TESLA X</h2>
                    <h2 className="text-[#667085] font-semibold text-xs">782 - IKD - LAG</h2>
                </div>
                <hr/>
                <div className="mt-[20px] flex justify-between">
                    <h4 className="text-[#667085]font-normal text-xs">Money spent:</h4>
                    <h3 className="text-[#475467] font-semibold text-sm">NGN 560,000,000.00</h3>
                </div>
                <div className="mt-[20px] flex justify-between">
                    <h4 className="text-[#667085]font-normal text-xs">Energy consumed:</h4>
                    <h3 className="text-[#475467] font-semibold text-sm">560.00Kw</h3>
                </div>
            </section>
            </section>

            <section>
                <h3>Charge history</h3>

               
            </section>
           
 

        </section>
    )
}

export default Vehicles