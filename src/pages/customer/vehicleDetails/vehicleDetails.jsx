import React, {useState, useEffect} from "react";
import ActiveCar from "../../../assets/svg/activeCar.svg"
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";
import axios from "../../../lib/axiosInterceptor"
import { useSearchParams } from "react-router-dom";

import "./styles.css"

const Vehicles = () =>{
    const [searchParams] = useSearchParams();
    const [vehicleDetails, setVehicleDetails] = useState();

    
    let code = searchParams.get("vehicleId");

    let customerId = searchParams.get("customerId");

    //vehicle details 
    const getDetails = () =>{
        axios
		.get(`/Customers/get-customer-vehicle-details-by-vehiclecode/${code}`)
		.then((res)=>{
            console.log(res)

		}
		)
    }


    //vehicle transactions 
    const transactions = () =>{
        axios
		.get(`/Customers/get-customer-vehicle-transactions/${customerId}/${code}`)
		.then((res)=>{
            console.log(res)

		}
		)
    }


    useEffect(() => {
		getDetails();
        transactions();
	}, []);




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