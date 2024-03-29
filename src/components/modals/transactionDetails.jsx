import { useEffect, useState } from "react";
import axios from "../../lib/axiosInterceptor";

import check from "../../assets/svg/check.svg";
import moment from "moment";
import { convertTime } from "../../utils/convertTime";
import { formatNumber } from "../../utils/formatNumber";
import { renderStatus } from "../../utils/renderStatus";

const TDetails = ({ transactionId }) => {
	const [details, setDetails] = useState();

	const getTransactionDetails = () => {
		axios
			.get(`/Transactions/get-transaction-details/${transactionId}`)
			.then((res) => {
				setDetails(res.data[0]);
			});
	};

	useEffect(() => {
		getTransactionDetails();
	}, []);

	console.log(details);

	return (
		<>
			<div className="mb-[1.25rem] ">
				<img src={check} alt="mark" className="mb-[1rem] " />
				<h4 className="font-semibold text-lg text-[#101828]">
					Transaction Details
				</h4>
			</div>
			<div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Transaction Date: </h6>

					<h3 className="text-[1rem] text-[#667084] font-semibold">
						{" "}
						{convertTime(details?.dateOfTransaction)}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Charger name: </h6>

					<h3 className="text-[1rem] text-[#667084] font-semibold">
						{details?.chargerName}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Charger Type: </h6>

					<h3 className="text-[1rem] text-[#667084] font-semibold">
						{details?.chargerType?.toUpperCase()}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Amount: </h6>

					<h3 className={`text-[1rem] font-semibold text-[var(--error500)]`}>
						{formatNumber(details?.totalAmount, true)}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Balance: </h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.amountRefundedToCustomer, true)}
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">
						Battery charge level before charge:{" "}
					</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.batteryStateOfChargeAtStart, false)}kw
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">
						Battery charge level after charge:{" "}
					</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.batteryStateOfChargeAtEnd, false)}kw
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Charge current: </h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.chargingCurrent, false)} ampere
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Cost per unit Charge: </h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.costPerUnitCharge, true)}
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Energy:</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{formatNumber(details?.totalUnitChargedInEnergy, false)} KW
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">
						Reason for Termination:
					</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{details?.reasonForTermination}
					</h3>
				</div>

				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Status:</h6>

					<div>{renderStatus(details?.transactionStatus)}</div>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Customer:</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{details?.customer}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Vehicle type:</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{details?.car}
					</h3>
				</div>
				<div className="flex justify-between items-center mb-[1rem] ">
					<h6 className="text-[1rem] text-[#667084]">Vehicle model:</h6>

					<h3 className={`text-[1rem] font-semibold text-[#667084]`}>
						{" "}
						{details?.carmodel}
					</h3>
				</div>
			</div>
		</>
	);
};

export default TDetails;
