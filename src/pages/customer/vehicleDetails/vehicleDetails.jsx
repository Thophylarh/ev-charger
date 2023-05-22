import React from "react";
import ActiveCar from "../../../assets/svg/activeCar.svg"
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";

import "./styles.css"

const Vehicles = () =>{

    return (
        <section className="w-[90%] mx-auto pt-[28px]">
            <VehicleCard/>

            <section className="mt-[20px]">
                <h3 className="mb-[12px]">Charge history</h3>
                
                <TransactionCard/>
                <TransactionCard/>
                <TransactionCard/>
                <TransactionCard/>
                <TransactionCard/>
               
            </section>
           
 

        </section>
    )
}

export default Vehicles