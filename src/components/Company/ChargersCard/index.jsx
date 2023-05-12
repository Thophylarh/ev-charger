import React from "react";
import ChargerImg from "../../../assets/svg/Charger.svg";

import activeStatusImg from "../../../assets/svg/activeStatus.svg";

export default function ChargersCard() {
	return (
		<div className="bg-white py-[1.5rem] px-[1.75rem]">
			<div className="flex">
				<div className="mr-[1rem]">
					<img
						src={ChargerImg}
						alt="EV charger"
						className="w-[2.8125rem]  mt-[1.25rem]"
					/>
				</div>

				<div className="w-full">
					<div className="flex justify-between items-center mb-[1rem] border-b-[1px] border-grey-100 pb-[0.75rem]">
						<h3>TESLA CHARGER</h3>

						<img src={activeStatusImg} alt="Charger is active" />
					</div>

					<div>
						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Revenue:</h3>

							<h5 className="text-[0.875rem]">
								NGN 560,000,000.<sup>00</sup>
							</h5>
						</div>

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Energy consumed: </h3>

							<h5 className="text-[0.875rem]">
								560.00 <sup>Kw</sup>
							</h5>
						</div>

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Last charge: </h3>

							<h5 className="text-[0.875rem]">18mins</h5>
						</div>

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Type: </h3>

							<h5 className="text-[0.875rem]">BMS</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
