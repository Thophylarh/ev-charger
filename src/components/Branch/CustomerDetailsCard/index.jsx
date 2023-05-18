import React from "react";

import ActiveCar from "../../../assets/svg/activeCar.svg";
import InActiveCar from "../../../assets/svg/inactiveCar.svg";

export default function CustomerDetailsCard({ isActive }) {
	return (
		<div
			className={`cursor-pointer bg-white py-[1.5rem] px-[1.75rem]  border border-[1px] border-[var(--grey100)]`}
		>
			{isActive && (
				<div>
					<div className={`flex justify-center py-3`}>
						<img src={ActiveCar} alt="Active cars" />
					</div>
					<div className="flex justify-between items-center mb-[0.75rem] border-b-[1px] border-grey-100 pb-4">
						<h3> TESLA X</h3>

						<h3>782 - IKD - LAG</h3>
					</div>

					<div className="flex justify-between items-center mb-[0.75rem] ">
						<h3 className="text-sm ">Money spent:</h3>

						<h5 className="text-sm font-bold">
							NGN 560,000,000.<sup>00</sup>
						</h5>
					</div>

					<div className="flex justify-between items-center mb-[0.75rem] ">
						<h3 className="text-sm ">Energy consumed:</h3>

						<h5 className="text-sm font-bold">
							560.00<sup>Kw</sup>
						</h5>
					</div>
				</div>
			)}

			{!isActive && (
				<div className="flex justify-center align-middle items-center text-center">
					<div>
						<div className={`flex justify-center py-5`}>
							<img
								src={InActiveCar}
								alt="Inactive car"
								className="mb-[1.25rem]"
							/>
						</div>
						<h3 className="text-base text-[#66708550]">You don’t have a vehicle at the moment</h3>
					</div>
				</div>
			)}
		</div>
	);
}
