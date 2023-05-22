import React from "react";
import Car from "../../assets/svg/cartransactionIcon.svg";

export default function TransactionCard() {
	return (
		<div className="">
			<div className=" flex justify-between items-center py-4  border-b-[1px] border-grey-100">
				<div className="flex items-center">
					<img src={Car} alt="Your Transaction"  className="mr-4 w-[2.8rem] h-[2.8rem]"/>

					<div>
						<h5 className="text-[var(--grey900)] text-xs font-semibold mb-2">TESLA X</h5>
						<p className="text-[var(--grey700)] text-xs font-medium ">NGN 20,000.00 </p>
					</div>
				</div>

				<div className="text-[var(--grey700)] text-xs ">
					<p className="mb-2 ">Today</p>

					<p className="font-medium">500kw</p>
				</div>
			</div>
		</div>
	);
}
