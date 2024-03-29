import { Table } from "antd";
import React from "react";
import CustomerDetailsCard from "../../../components/Branch/CustomerDetailsCard";
import eye from "../../../assets/svg/eye.svg";
import activeDot from "../../../assets/svg/activeDot.svg";
export default function CustomerDetails() {
	let column = [
		{
			title: "#",
			dataIndex: "index",
			key: "index",
		},

		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},

		{
			title: "Charger",
			dataIndex: "charger",
			key: "charger",
		},

		{
			title: "Charger Type",
			dataIndex: "chargerType",
			key: "chargerType",
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
		},

		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
		},

		{
			title: "Energy",
			dataIndex: "energy",
			key: "energy",
		},
		{
			title: "Status",
			dataIndex: "transactionStatus",
			key: "transactionStatus",
			render: (transactionStatus) => (
				<button className="flex justify-between ">
					<img src={activeDot} className="pr-[0.25rem] mt-[6px]" />
					<p className="text-[#15833C] font-semibold text-xs leading-5">
						Completed
					</p>
				</button>
			),
		},
		{
			title: "",
			dataIndex: "",
			key: "",
			render: () => (
				<button className="flex justify-between bg-black text-white p-[0.5rem] rounded-md ">
					<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
					<p>View details</p>
				</button>
			),
		},
	];

	return (
		<section>
			<section className={`mb-[var(--marginBtwSection)]`}>
				<section className={`mb-[var(--marginBtwSection)]`}>
					<div className={`flex justify-between items-center `}>
						<div>
							<div className={`flex items-center`}>
								<h4 className="mr-[1rem]">Customers</h4>

								<svg
									width="7"
									height="12"
									viewBox="0 0 7 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="mr-[1rem] mt-1"
								>
									<path
										d="M1.19649 0.723417C1.43524 0.723417 1.67524 0.814667 1.85774 0.997167L6.21649 5.33467C6.39274 5.51092 6.49149 5.74967 6.49149 5.99967C6.49149 6.24842 6.39274 6.48717 6.21649 6.66342L1.85774 11.0034C1.49149 11.3684 0.898986 11.3684 0.532736 11.0009C0.167736 10.6334 0.168986 10.0397 0.535236 9.67467L4.22649 5.99967L0.535237 2.32467C0.168987 1.95967 0.167737 1.36717 0.532737 0.999668C0.715237 0.814668 0.956487 0.723417 1.19649 0.723417Z"
										fill="black"
									/>
								</svg>
								<h4 className="">Details</h4>
							</div>

							<p className="subHeader">
								Get a review of your customer consumption summary
							</p>
						</div>
					</div>
				</section>

				<section className={`mb-[var(--marginBtwSection)]`}>
					<div className=" grid grid-cols-12  ">
						<div className=" col-span-9  ">
							<div className=" grid grid-cols-4  ">
								<div className="revenueBlock">
									<h3>MONEY SPENT</h3>

									<h5>
										NGN 300,000.<sup>00</sup>{" "}
									</h5>
								</div>
								<div className="revenueBlock">
									<h3>VEHICHLES</h3>

									<h5>
										NGN 300,000.<sup>00</sup>{" "}
									</h5>
								</div>

								<div className="revenueBlock">
									<h3>LAST CHARGE</h3>

									<h5>20mins ago</h5>
								</div>
								<div className="revenueBlock">
									<h3>CHARGER TYPE</h3>

									<h5>CICE</h5>
								</div>
							</div>
						</div>

						<div className=" col-span-3 h-[100%] ">
							<div className="h-[100%]  totalRevenueBlock text-white pl-[1.25rem]">
								<h3>ENERGY CONSUMPTION</h3>

								<h5>
									500,000
									<sup>kw</sup>{" "}
								</h5>
							</div>
						</div>
					</div>
				</section>

				<section className={`mb-[var(--marginBtwSection)]`}>
					<div className="bg-[var(--grey50)] p-[1.25rem] grid grid-cols-3 gap-4">
						<CustomerDetailsCard isActive={true} />
						<CustomerDetailsCard isActive={true} />
						<CustomerDetailsCard isActive={false} />
					</div>
				</section>

				<section className={`mb-[var(--marginBtwSection)]`}>
					<Table columns={column} />
				</section>
			</section>
		</section>
	);
}
