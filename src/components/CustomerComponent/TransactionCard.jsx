import React from "react";
import Car from "../../assets/svg/cartransactionIcon.svg";
import { convertTime } from "../../utils/convertTime";
import { formatNumber } from "../../utils/formatNumber";

export default function TransactionCard({data}) {
	return (
		<div className="">
			<div className=" flex justify-between items-center py-4  border-b-[1px] border-grey-100">
				<div className="flex items-center">
					<img src={Car} alt="Your Transaction"  className="mr-4 w-[2.8rem] h-[2.8rem]"/>

					<div>
						<h5 className="text-[var(--grey900)] text-xs font-semibold mb-2">TESLA X</h5>
						<p className="text-[var(--grey700)] text-xs font-medium ">NGN {formatNumber(data?.amountPaidByUser) }</p>
					</div>
				</div>

				<div className="text-[var(--grey700)] text-xs ">
					<p className="mb-2 ">{convertTime(data?.createdAt) }</p>

					<p className="font-medium text-right">{data?.totalUnitChargedInEnergy}KWH</p>
				</div>
			</div>
		</div>
	);
}
