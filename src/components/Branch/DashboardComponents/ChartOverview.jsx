import React, { useEffect, useState } from "react";

import axios from "../../../lib/axiosInterceptor";

import BarChart from "../../../Graphs/Chart/StationOverviewChart";

import ActiveCharger from "../../../assets/svg/activeCharger.svg";
import energyConsumed from "../../../assets/svg/energyConsumed.svg";
import { useSearchParams } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";

export default function ChartOverview() {
	const [totalChargers, setTotalChargers] = useState("");
	const [noOfActiveChargers, setNoActiveChargers] = useState("");
	const [totalEnergyConsumed, setTotalEnergyConsumed] = useState("");
	const [graphDetails, setGraphDetails] = useState([]);

	const [searchParams] = useSearchParams();

	let stationId = searchParams.get("stationId");
	let companyId = searchParams.get("companyId");

	//total number of station chargers
	const GetstationChargers = () => {
		axios
			.get(
				`/Chargers/get-total-station-charger-count/${companyId}/${stationId}`
			)
			.then((res) => {
				setTotalChargers(res.data);
			});
	};

	//total number of active chargers
	const GetactiveChargers = () => {
		axios
			.get(
				`/Chargers/get-station-active-charger-count/${companyId}/${stationId}`
			)
			.then((res) => {
				setNoActiveChargers(res.data);
			});
	};

	//total energy consumed
	const GetTotalEnergyConsumed = () => {
		axios
			.get(
				`/Chargers/get-total-energy-consumed-by-station/${companyId}/${stationId}`
			)
			.then((res) => {
				setTotalEnergyConsumed(res.data);
			});
	};

	//Charger Graph
	const ChargerGraph = () => {
		axios
			.get(`/Transactions/get-group-transaction-by-month/station/${stationId}`)
			.then((res) => {
				setGraphDetails(res.data);
			});
	};

	useEffect(() => {
		GetstationChargers();
		GetactiveChargers();
		GetTotalEnergyConsumed();
		ChargerGraph();
	}, []);

	return (
		<section className={`mb-[var(--marginBtwSection)] max-h-[257.5rem]`}>
			<div className="grid grid-cols-12 gap-4 h-[100%]">
				<div className="col-span-9">
					<BarChart details={graphDetails} />
				</div>
				<div className="col-span-3">
					<div className={`mb-[var(--marginBtwElements)]`}>
						<h3>CHARGERS SUMMARY</h3>
					</div>

					<div
						className={`bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
					>
						<h3 className="text-sm mb-[1.25rem]">Number of charges</h3>

						<h5>{totalChargers}</h5>
					</div>

					<div
						className={` flex justify-between items-center bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
					>
						<div>
							<h3 className="text-sm mb-[1.25rem]">Active chargers</h3>

							<h5 className=" text-[var(--primaryGreen500)]">
								{noOfActiveChargers}
							</h5>
						</div>

						<img
							src={ActiveCharger}
							alt="Active Chargers"
							className="h-[2.3rem] w-[1.8244rem}"
						/>
					</div>

					<div
						className={`flex justify-between items-center  bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
					>
						<div>
							<h3 className="text-sm mb-[1.25rem]">Total energy consumed</h3>

							<h5>
								{formatNumber(totalEnergyConsumed, false)}
								<sup className="text-xs">KW</sup>
							</h5>
						</div>

						<img
							src={energyConsumed}
							alt="Energy Consumed"
							className="h-[2.255rem] w-[1.8244rem}"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
