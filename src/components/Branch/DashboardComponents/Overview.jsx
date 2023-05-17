import React, { useEffect, useState } from "react";

import axios from "../../../lib/axiosInterceptor";

import Profit from "../../../assets/svg/profit.png";
import { formatNumber } from "../../../utils/formatNumber";
import { splitNumber } from "../../../utils/splitNumber";

export default function StationDashboardOverview({ stationId, newDate }) {
	const [revenue, setRevenue] = useState();
	const [ACRevenue, setACRevenue] = useState();
	const [DCRevenue, setDCRevenue] = useState();
	const [CICERevenue, setCICERevenue] = useState();
	const [percentage, setPercentage] = useState();

	const getStationRevenue = () => {
		let url;

		if (!newDate || newDate === " ") {
			url = `/Transactions/get-revenue/station/${stationId}`;
		} else {
			let splitDate = newDate.split("-");
			url = `/Transactions/get-revenue-by-month-year/station/${stationId}/${splitDate[1]}/${splitDate[0]}`;
		}

		axios.get(url).then((res) => {
			if (res.data?.LastMonthRevenue && res.data?.PercentageDifference) {
				setPercentage({
					status: res.data.RevenueMargin,
					percent: Math.floor(res.data.PercentageDifference),
				});
			} else {
				setPercentage(null);
			}

			let formatRevenue = splitNumber(res.data.TotalRevenue);

			setRevenue(formatRevenue);
			setACRevenue(splitNumber(res.data.ACRevenue));
			setDCRevenue(splitNumber(res.data.DCRevenue));
			setCICERevenue(splitNumber(res.data.BMSRevenue));
		});
	};

	useEffect(() => {
		getStationRevenue();

		return () => {};
	}, [newDate]);

	return (
		<section className={`mb-[var(--marginBtwSection)]`}>
			<div className=" grid grid-cols-4  ">
				<div className="revenueBlock">
					<h3>CICE REVENUE</h3>

					<h5>
						NGN {formatNumber(CICERevenue?.[0], false)}.
						<sup>{CICERevenue?.[1]}</sup>{" "}
					</h5>

					<p>0.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>AC REVENUE</h3>

					<h5>
						NGN {formatNumber(ACRevenue?.[0], false)}.
						<sup>{ACRevenue?.[1]}</sup>{" "}
					</h5>

					<p>0.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>DC REVENUE</h3>

					<h5>
						NGN {formatNumber(DCRevenue?.[0], false)}.
						<sup>{DCRevenue?.[1]}</sup>{" "}
					</h5>

					<p>0.00 KW</p>
				</div>

				<div className="totalRevenueBlock text-white pl-[1.25rem]">
					<h3>TOTAL REVENUE</h3>

					<h5>
						NGN {formatNumber(revenue?.[0], false)}.<sup>{revenue?.[1]}</sup>{" "}
					</h5>

					{percentage && (
						<div className="flex items-center">
							<img
								src={Profit}
								alt="profit indicator"
								className="mr-[0.25rem] w-[0.6rem] h-[0.6875rem]"
							/>
							<p>{formatNumber(percentage?.percent)}% since last month </p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
