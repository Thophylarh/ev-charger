import React, {useState, useEffect} from "react";
import Profit from "../../../assets/svg/profit.png";
import ListOfTransactions from "../../../components/Branch/reportTransactions/reportTransactions";
import axios from "../../../lib/axiosInterceptor";
import StationDashboardOverview from "../../../components/Branch/DashboardComponents/Overview";
import Loader from "../../../components/Loader"
import { DatePicker } from "antd";

import { useSearchParams } from "react-router-dom";



const { RangePicker } = DatePicker;

const Report = () =>{
	const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, setDate] = useState()
	
    const load = () =>{
        setIsLoading(true)
    }
	
    const stopload = () =>{
        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }

    useEffect(() => {
		load();
        stopload();
	}, []);

	let stationId = searchParams.get("stationId");

    //date picker function
	const selectDate = (date, dateString) =>{
		setDate(dateString)
		
	}
	

    return (
        <>
        {isLoading && (
				<section>
					<Loader />
				</section>
			)}

{!isLoading && (
        <section>
           <section className={`mb-[var(--marginBtwSection)] flex justify-between`}>
            <div>
            <h4>Sales Report</h4>

            <p className="subHeader">Here is an overview and breakdown of your station energy revenue and consumption.</p>
            </div>

            <div>
            <RangePicker onChange={selectDate}/>
            </div>
           </section>

        

			<StationDashboardOverview stationId={stationId} />

        <section>
          
            <ListOfTransactions  stationId={stationId} selectedDate={selectedDate}/>
        </section>
        </section>
)}
        </>
    )
}

export default Report 