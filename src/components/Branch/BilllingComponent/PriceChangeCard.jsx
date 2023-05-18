import React from "react";
import { formatDate } from "../../../utils/formatDate";
import moment from "moment";

export default function PriceChangeCard({history}) {

	
	return (
		<div
			key={history.id}
			className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
		>
			<div className={`flex justify-between items-center mb-4`}>
				<h6 className={`text-[var(--goldColor)] text-sm`}>
					{history.chargerType == "bms" ? "CICE"  : history.chargerType.toUpperCase()} ON {history.billingType.toUpperCase()}
				</h6>

				<p className={`text-xs text-[var(--grey500)]`}>
					{" "}
					{moment(history.updatedAt).format('MMMM d, YYYY') }
					
				</p>
			</div>

			<div className={`flex justify-between items-center`}>
				<div className="text-[var(--grey600)]">
					<h6 className={` font-medium text-base`}>
						{" "}
						NGN{history.previousCostPerUnitCharge}/kw
					</h6>
					<p className={`text-xs`}>CURRENT PRICE</p>
				</div>

				<p className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}>
					{" "}
					-{" "}
				</p>

				<div className="text-[var(--primaryGreen500)]">
					<h6 className={` font-medium text-base`}>
						NGN{history.costPerUnitCharge}/kw
					</h6>
					<p className={`text-xs`}>new price</p>
				</div>
			</div>
		</div>
	);
}
