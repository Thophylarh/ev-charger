import React from "react";
import { formatNumber } from "../../../utils/formatNumber";

export default function CICEBilling({ openModal, price }) {
	let green = price?.filter((el) => el.billingType.toLowerCase() === "green");
	let utility = price?.filter(
		(el) => el.billingType.toLowerCase() === "utility"
	);
	let grid = price?.filter((el) => el.billingType.toLowerCase() === "grid");

	return (
		<div className={`mb-[var(--marginBtwElements)]`}>
			<div>
				<h3 className={`text-[var(--goldColor)] mb-[0.5rem]`}>
					CICE PRICE/KW SUMMARY
				</h3>
			</div>
			<div>
				<div className=" grid grid-cols-3  ">
					<div className="revenueBlock">
						<h3>WHEN ON GRID</h3>

						<h5>
							NGN{" "}
							{grid?.[0]?.costPerUnitCharge
								? formatNumber(grid?.[0]?.costPerUnitCharge)
								: 0}
							/KW
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal("CICE", "GRID", grid?.[0]?.costPerUnitCharge)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>

					<div className="revenueBlock">
						<h3>WHEN ON UTILITY</h3>

						<h5>
							NGN{" "}
							{utility?.[0]?.costPerUnitCharge
								? formatNumber(utility?.[0]?.costPerUnitCharge)
								: 0}
							/KW
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal(
									"CICE",
									"UTILITY",
									utility?.[0]?.costPerUnitCharge
								)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>

					<div className="revenueBlock">
						<h3>WHEN ON GREEN ENRGY</h3>

						<h5>
							NGN{" "}
							{green?.[0]?.costPerUnitCharge
								? formatNumber(green?.[0]?.costPerUnitCharge)
								: 0}
							/KW
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal(
									"CICE",
									"GREEN",
									green?.[0]?.costPerUnitCharge
								)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
