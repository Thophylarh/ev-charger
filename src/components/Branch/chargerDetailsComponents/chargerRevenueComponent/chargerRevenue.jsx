import React, { useState, useEffect } from "react";
import axios from "../../../../lib/axiosInterceptor";
import { formatNumber } from "../../../../utils/formatNumber";
import { lastCharged } from "../../../../utils/lastCharged";
import { chargerType } from "../../../../utils/chargerType";
import "./style.css";
import { useSearchParams } from "react-router-dom";

const ChargerRevenue = ({ ChargerDetails }) => {
	const [ChargerRevenue, setChargerRevenue] = useState([]);

	const [searchParams] = useSearchParams();

	let chargerId = searchParams.get("chargerId");

	//revenue for charger
	const Revenue = () => {
		axios.get(`/Transactions/get-revenue/charger/${chargerId}`).then((res) => {
			// console.log(res)
			setChargerRevenue(res.data);
		});
	};

	useEffect(() => {
		Revenue();
	}, []);

	return (
		<section className="mb-[var(--marginBtwSection)]">
			<div className="grid grid-cols-5 ">
				<div className="revenueBlock ">
					<h3>CHARGER REVENUE</h3>
					<h6>NGN {formatNumber(ChargerRevenue.totalRevenue, false)}</h6>
				</div>

				<div className="revenueBlock">
					<h3>CHARGE COUNT</h3>
					<h6> {ChargerDetails.ChargeCount}</h6>
				</div>

				<div className="revenueBlock ">
					<h3>LAST CHARGE</h3>
					<h6>{lastCharged(ChargerDetails.LastCharged)}</h6>
				</div>

				<div className="revenueBlock">
					<h3>CHARGER TYPE</h3>
					<h6>{chargerType(ChargerDetails.ChargerType)}</h6>
				</div>

				<div className="totalRevenueBlock ">
					<h3>ENERGY CONSUMPTION</h3>
					<h5>
						{formatNumber(ChargerDetails.EnergyConsumed, false)} <sup>KWH</sup>{" "}
					</h5>
				</div>
			</div>
		</section>
	);
};

export default ChargerRevenue;
