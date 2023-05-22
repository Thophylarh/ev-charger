import React from "react";
import lines from "../../../assets/svg/yellowlines.svg";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";

export default function CustomerDashboard() {
	let style = {
		background: `url(${lines})`,
	};

	let style2 = {
		backgroundImage: `url(${InactiveCar})`,
		backgroundPosition: "120% bottom",
	};

	return (
		<section className="w-[90%] mx-auto py-5">
			<div className={`mb-[var(--marginBtwSection)]`}>
				<p className="text-base text-[--grey900] mb-1 font-black">
					Hi Akinromade
				</p>
				<p className="text-xs text-[--grey500]  ">Explore your EV dashboard</p>
			</div>

			<section className="bg-black rounded-2xl  text-white flex justify-between mb-[var(--marginBtwSection)]">
				<div className="px-4 py-7">
					<p className="text-sm  text-white  mb-4">Wallet balance</p>

					<h5 className="text-[1.5rem]  text-white  mb-4">
						NGN 0.<sup>00</sup>
					</h5>

					<button className="border p-2 rounded-lg text-sm border-[#B27203] text-[#B27203] flex items-center">
						<PlusIcon /> Fund wallet
					</button>
				</div>

				<div className="h-[100%] w-[50%]">
					<img src={lines} alt=" fundwallet" className="h-[100%]" />
				</div>
			</section>

			<section className="grid grid-cols-12 gap-2 mb-[var(--marginBtwSection)]">
				<div
					style={style2}
					className={` bg-no-repeat col-span-5 bg-[var(--grey50)] w-[100%] rounded-2xl py-4 px-4`}
				>
					<p className="text-xs mb-3 text-[var(--grey900)] font-medium">
						My vehicles
					</p>

					<h5 className="text-[1.125rem]   mb-3">2</h5>
				</div>

				<div
					className={`col-span-7 bg-[var(--grey50)] w-[100%] rounded-lg py-4 px-4`}
				>
					<p className="text-xs mb-3 text-[var(--grey900)] font-medium">
						Money spent
					</p>

					<h5 className="text-[1.125rem]   mb-3">NGN 20,000.00</h5>

					<p className="text-xs text-[var(--grey600)] font-bold">3,000.00 KW</p>
				</div>
			</section>

			<section className="mb-[var(--marginBtwSection)]">
				<h5 className="font-semibold mb-3">Transaction history</h5>

				<div>
					<TransactionCard/>
					<TransactionCard/>
				</div>
			</section>
		</section>
	);
}

const PlusIcon = () => {
	return (
		<svg
			className="mr-1"
			width="20"
			height="20"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.01796 5.43652V9.60644"
				stroke="#B27203"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.1078 7.5215H4.93359"
				stroke="#B27203"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.33984 7.5215C1.33984 3.26194 2.76011 1.84167 7.01967 1.84167C11.2792 1.84167 12.6995 3.26194 12.6995 7.5215C12.6995 11.7811 11.2792 13.2013 7.01967 13.2013C2.76011 13.2013 1.33984 11.7811 1.33984 7.5215Z"
				stroke="#B27203"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
