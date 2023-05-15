import React, { useState, useEffect } from "react";
import dropDown from "../../../assets/svg/dropDownArrow.svg";
import Charger from "../../../assets/images/charger.png";
import ActiveCharger from "../../../assets/images/active-charger.png";
import OfflineCharger from "../../../assets/images/offline-charger.png";
import ChargerCard from "../../../components/Branch/evChargers/chargerCards";

import axios from "../../../lib/axiosInterceptor";

const EvChargers = () => {
	const [totalChargers, setTotalChargers] = useState("");
	const [noOfActiveChargers, setNoActiveChargers] = useState("");
	const [noOfflineChargers, setNoOfflineChargers] = useState("");
	const [totalEnergy, setTotalEnergy] = useState("");
	const [stationChargerList, setStationChargerList] = useState([]);

	const url = "";

	const token = localStorage.getItem("user-token");
	const companyId = localStorage.getItem("id");
	const stationId = localStorage.getItem("stationId");

	//total number of station chargers
	const GetstationChargers = () => {
		axios
			.get(
				url +
					`/Chargers/get-total-station-charger-count/${companyId}/${stationId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				setTotalChargers(res.data);
			});
	};

	//total number of active chargers
	const GetactiveChargers = () => {
		axios
			.get(
				url +
					`/Chargers/get-station-active-charger-count/${companyId}/${stationId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				setNoActiveChargers(res.data);
			});
	};

	//total number of offline chargers
	const GetofflineChargers = () => {
		axios
			.get(
				url +
					`/Chargers/get-station-offline-charger-count/${companyId}/${stationId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				setNoOfflineChargers(res.data);
			});
	};

	//total energy consumed
	const GetTotalEnergy = () => {
		axios
			.get(
				url +
					`/Chargers/get-total-energy-consumed-by-station/${companyId}/${stationId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				setTotalEnergy(res.data);
			});
	};

	//get list of chargers
	const getListOfChargers = () => {
		axios
			.get(
				url + `/Chargers/get-list-station-charger/${companyId}/${stationId}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				console.log(res);
				setStationChargerList(res.data);
			});
	};

	useEffect(() => {
		GetstationChargers();
		GetofflineChargers();
		GetTotalEnergy();
		GetactiveChargers();
		getListOfChargers();
	}, []);

	return (
		<div className=" overflow-y-scroll h-screen w-full pb-[2rem]">
			<div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[1.5rem] ">
				<div className="flex">
					<h4 className="font-bold text-2xl ">Ev Chargers</h4>
				</div>

				<div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-[1.25rem] py-[0.25rem]">
					<p className=" text-black font-light font-sm">This month</p>
					<img src={dropDown} alt="" />
				</div>
			</div>

			<div className="grid grid-cols-4 pt-[1rem] px-[1.5rem]">
				<div className="w-[95%] bg-white flex justify-between px-[2rem] border border-gray-200 rounded-xl border-1">
					<div>
						<img
							className="w-[2.5rem] h-[3.5rem] mt-[3rem]"
							src={Charger}
							alt=""
						/>
					</div>

					<div className="flex flex-col justify-center items-center">
						<p className="font-normal text-sm text-gray-400 ">
							Number of chargers
						</p>
						<p className="font-normal text-4xl text-gray-900 pt-[1rem]">
							{totalChargers}
						</p>
					</div>
				</div>

				<div className="w-[95%] bg-white flex justify-between ml-[0.5rem]  px-[2rem] border border-gray-200 rounded-xl border-1 ">
					<img
						className="w-[2.5rem] h-[3.5rem] mt-[3rem]"
						src={ActiveCharger}
						alt=""
					/>

					<div className="flex flex-col justify-center items-center ">
						<p className="font-normal text-sm text-gray-400">Active chargers</p>
						<p className="font-normal text-4xl text-gray-900 pt-[1rem]">
							{noOfActiveChargers}
						</p>
					</div>
				</div>

				<div className=" w-[95%] bg-white flex justify-between ml-[1rem] px-[2rem] border border-gray-200 rounded-xl border-1">
					<img
						className="w-[2.5rem] h-[3.5rem] mt-[3rem]"
						src={OfflineCharger}
						alt=""
					/>

					<div className="flex flex-col justify-center items-center">
						<p className="font-normal text-sm text-gray-400">
							Offline chargers
						</p>
						<p className="font-normal text-4xl text-gray-900 pt-[1rem]">
							{noOfflineChargers}
						</p>
					</div>
				</div>

				<div className="w-[92%] bg-gray-900 flex justify-center items-center ml-[1.5rem] py-[2.5rem] px-[1rem] border border-gray-100 rounded-xl border-1">
					<div className="text-center text-white">
						<p className="font-normal text-4xl">
							{totalEnergy?.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
							kWh
						</p>
						<p className="pt-[0.5rem]">Total energy consumption</p>
					</div>
				</div>
			</div>

			<div className="pl-[1.5rem] py-[1.5rem] font-semibold text-gray-600 text-base">
				{" "}
				<p>Ev Charger Statistics</p>
			</div>

			<section className="pl-[1.5rem]">
				<div className="grid grid-cols-3 pb-[2rem]">
					{stationChargerList.map((charger) => (
						<ChargerCard status={true} charger={charger} />
					))}
				</div>
			</section>
		</div>
	);
};

export default EvChargers;
