import React, { useEffect, useState } from "react";
import Profit from "../../assets/svg/profit.png";
import FLineChart from "../Chart/filteredLineChart";
import axios from "axios";
import GreenChart from "../Chart/greenChart";
import OrangeChart from "../Chart/orangeChart";
import moment from "moment";

function Hero(props) {
	let revenue = props.fRevenue;
	let TotalRevenue = revenue.TotalRevenue;
	let graphData = props.graphData;
	let filterRes = props.empty;

	let totalAmount = graphData.map((data) => {
		return data.totalAmount;
	});

	let month = graphData.map((data) => {
		return data.month;
	});

	let fDay = graphData.map((data) => {
		return data.day;
	});

  	let filteredDate = graphData.map(
		(data) => ` ${moment(data.month, "M").format("MMM")} ${data.day}`
	);

	return (
		<div>
			<div className="grid grid-cols-3   ">
				<div className="col-span-1 bg-[#fff] py-6 px-3 border-r">
					<div className=" border-b">
						<div className="pb-4">
							<p className="text-gray-400 font-normal text-sm">
								{" "}
								Total revenue
							</p>
						</div>
						<div className="pb-2">
							<h1 className="font-bold text-2xl text-gray-900">
								₦
								{TotalRevenue?.toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</h1>
						</div>
						<div className="flex items-center gap-2 pb-4">
							<div className="text-sm text-gray-600 font-normal">22%</div>
							<img src={Profit} alt="" />
						</div>
					</div>
					{/* revenue based on time */}
					<div className="flex  border-b">
						<div className="">
							<div className="pb-3 mt-[1.5rem]">
								<p className="text-gray-400 font-normal text-sm">
									Revenue based on time
								</p>
							</div>
							<div className="pb-2">
								<h1 className="font-bold text-2xl text-gray-900">
									₦
									{revenue.TimeRevenue?.toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</h1>
							</div>
							<div className="flex items-center gap-2 pb-4">
								<div className="text-sm text-gray-600 font-normal">22%</div>
								<img src={Profit} alt="" />
							</div>
						</div>
						<div className="h-[2.5rem] w-[8rem] flex mt-[5rem]">
							<OrangeChart />
						</div>
					</div>

					<div className="flex">
						<div className="">
							<div className="pb-3 mt-[1.5rem]">
								<p className="text-gray-400 font-normal text-sm ">
									Revenue based on energy
								</p>
							</div>
							<div className="pb-2">
								<h1 className="font-bold text-2xl text-gray-900">
									₦
									{revenue.EnergyRevenue?.toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</h1>
							</div>
							<div className="flex items-center gap-2 pb-4">
								<div className="text-sm text-gray-600 font-normal">22%</div>
								<img src={Profit} alt="" />
							</div>
						</div>
						<div className=" h-[2.5rem] w-[8rem] mt-[5rem] ">
							<GreenChart />
						</div>
					</div>
				</div>

				<div className="col-span-2 bg-[#fff] p-6 ">
					<div className="text-sm text-gray-400 font-normal">
						<p>Revenue Summary</p>
					</div>
					<div id="chart" className="h-[22rem]">
						{filterRes !== [] ? (
							<FLineChart totalAmount={totalAmount} month={month} fDay={fDay} filteredDate={filteredDate}/>
						) : (
							<h3>No data</h3>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
