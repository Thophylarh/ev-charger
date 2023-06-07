import React from "react";
import Car from "../../assets/svg/cartransactionIcon.svg";
import { formatDate } from "../../utils/formatDate";
import Card from "../../assets/svg/card.svg";
import { convertTime } from "../../utils/convertTime";
import { formatNumber } from "../../utils/formatNumber";


export default function TopUpCard({data}) {

    console.log(data)
	return (
		<div className="">
			<div className=" flex justify-between items-center py-4  border-b-[1px] border-grey-100">
				<div className="flex items-center">
					<img src={Card} alt="Your Transaction"  className="mr-4 w-[2.8rem] h-[2.8rem]"/>

					<div>
						<h5 className="text-[var(--grey900)] text-xs font-semibold mb-2">{data?.transactionType?.toUpperCase()}</h5>
						<p className="text-[var(--grey700)] text-xs font-medium ">NGN {formatNumber(data?.amount) } </p>
					</div>
				</div>

				<div className="text-[var(--grey700)] text-xs ">
					<p className="mb-2 ">{ convertTime(data?.createdAt) }</p>
					<p className="text-[#1DB954]">{data?.transactionStatus?.toUpperCase()}</p>
					
				</div>
			</div>
		</div>
	);
}
