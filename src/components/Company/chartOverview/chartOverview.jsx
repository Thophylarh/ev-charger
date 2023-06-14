import BarChart from "../../../Graphs/Chart/StationOverviewChart";
import Chart from 'chart.js/auto';
import React, {useState, useEffect} from "react";
import axios from "../../../lib/axiosInterceptor";
import { formatNumber } from "../../../utils/formatNumber";

const ChartOverview = ({id, newDate}) => {
	const [testGraph, setTestGraph ] = useState([])

	const [stations, setStations ] = useState()

	const [EnergyConsumed, setTotalEnergyConsumed ] = useState()

	const getRevenueGraph =  () => {
		let finalUrl;
		
		if (!newDate) {
			finalUrl = `/Transactions/get-group-transaction-by-month/company/${id}`;
		} else {
			let seperatedDate = newDate.split("-");

			finalUrl = `/Transactions/get-transaction-by-month-year/company/${id}/${seperatedDate[1]}/${seperatedDate[0]}`;
		}

		axios
			.get(finalUrl)
			.then((res) => {
				setTestGraph(res.data);
				console.log(res)
			});

	};

	//station number 
	const StationDeatils = () =>{
		axios.get("/Stations/get-station-by-company/" + id)
        .then((res)=>{
			console.log(res?.data?.length)
			setStations(res?.data?.length)
        })
	}

		//total energy consumed
		const GetTotalEnergyConsumed = () => {
			axios
				.get(
					`/Chargers/get-total-energy-consumed-by-company/${id}`
				)
				.then((res) => {
					setTotalEnergyConsumed(res?.data);
				});
		};

	useEffect(() => {
		
		getRevenueGraph();
		StationDeatils();
		GetTotalEnergyConsumed();
		
	}, []);

	useEffect(() => {
		
		getRevenueGraph();
	
		
	}, [newDate]);



    return ( <section>
        <section className={`mb-[var(--marginBtwSection)] max-h-[257.5rem] mt-[24px]`}>
			<div className="grid grid-cols-12 gap-4 h-[100%]">
				<div className="col-span-9">
                    
					<BarChart  details={testGraph}/>
				</div> 
				<div className="col-span-3">
					

					<div
						className={`bg-[var(--grey100)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[8px]`}
					>
						<h3 className="text-sm mb-[1.25rem]">Number of Stations</h3>

						<h5>{stations}</h5>
					</div>

					<div
						className={` flex justify-between items-center bg-[var(--grey100)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[8px]`}
					>
						<div>
							<h3 className="text-sm mb-[1.25rem]">Total faults</h3>

							<h5 className=" text-[var(--primaryGreen500)]">
								5
							</h5>
						</div>

						
					</div>

					<div
						className={`flex  justify-center items-center  bg-black py-[1.75rem] rounded-lg mb-[8px] `}
					>
						<div className="text-center">
                        <h5 className="text-white font-normal">
								{formatNumber( EnergyConsumed)} KWH
							</h5>
							<h3 className="text-sm mb-[1.25rem] text-white font-normal">Total energy consumed</h3>

							
						</div>

						
					</div>
				</div>
			</div>
		</section>
    </section> );
}
 
export default ChartOverview;