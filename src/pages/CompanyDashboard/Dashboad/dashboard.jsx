import React from "react";
import "./style.css";

import Profit from "../../../assets/svg/profit.png";

export default function Dashboardd() {
	return (
		<section>
			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className={`flex justify-between items-center `}>
					<div>
						<h4 className="mb-[8px]">Hello, Sterling HQ</h4>
						<p className="subHeader">
							Here is an overview and breakdown of your station energy revenue
							and consumption.
						</p>
					</div>
					<div>date</div>
				</div>
			</section>

			<section>
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
							NGN 300,000.<sup>00</sup>{" "}
						</h5>

						<div className="flex items-center">
							<img src={Profit} alt="profit indicator" className="mr-[0.25rem] w-[0.6rem] h-[0.6875rem]" />
							<p>22% since last month </p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
