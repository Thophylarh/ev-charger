import React, {useState, useEffect} from "react";
import Profit from "../../../assets/svg/profit.png";
import ListOfTransactions from "../../../components/Branch/reportTransactions/reportTransactions";
import axios from "../../../lib/axiosInterceptor";
import StationDashboardOverview from "../../../components/Branch/DashboardComponents/Overview";

import { useSearchParams } from "react-router-dom";


const Report = () =>{
	const [searchParams] = useSearchParams();
	
	

	let stationId = searchParams.get("stationId");

	

    return (
        <section>
           <section className={`mb-[var(--marginBtwSection)]`}>
            <h4>Sales Report</h4>

            <p className="subHeader">Here is an overview and breakdown of your station energy revenue and consumption.</p>
           </section>

        

			<StationDashboardOverview stationId={stationId} />

        <section>
          
            <ListOfTransactions  stationId={stationId}/>
        </section>
        </section>

       
    )
}

export default Report 