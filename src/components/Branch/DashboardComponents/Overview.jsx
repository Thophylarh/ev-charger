import React, { useEffect, useState } from "react";

import axios from "../../../lib/axiosInterceptor";

import Profit from "../../../assets/svg/profit.png";
import { formatNumber } from "../../../utils/formatNumber";

export default function StationDashboardOverview({ stationId }) {
	const [revenue, setRevenue] = useState();

	const getStationRevenue = () => {
		axios.get(`/Transactions/get-revenue/station/${stationId}`).then((res) => {
			let formatRevenue = res.data.TotalRevenue.toFixed(2).split(".");

			setRevenue(formatRevenue);
		});
	};

	useEffect(() => {
		getStationRevenue();

		return () => {};
	}, []);

	return (
		<section className={`mb-[var(--marginBtwSection)]`}>
			<div className=" grid grid-cols-4  ">
				<div className="revenueBlock">
					<h3>BMS REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>AC REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>DC REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="totalRevenueBlock text-white pl-[1.25rem]">
					<h3>TOTAL REVENUE</h3>

					<h5>
						NGN {formatNumber(revenue?.[0], false)}.<sup>{revenue?.[1]}</sup>{" "}
					</h5>

					<div className="flex items-center">
						<img
							src={Profit}
							alt="profit indicator"
							className="mr-[0.25rem] w-[0.6rem] h-[0.6875rem]"
						/>
						<p>22% since last month </p>
					</div>
				</div>
			</div>
		</section>
	);
}
