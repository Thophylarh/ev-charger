import { Table } from "antd";
import React, { useEffect, useState, useRef } from "react";

import axios from "../../../lib/axiosInterceptor";

import activeDot from "../../../assets/svg/activeDot.svg";

import eye from "../../../assets/svg/eye.svg";
import { NavLink } from "react-router-dom";
import ExportFile from "../../../components/exportComponent/ExportFile";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";
import Modal from "../../../components/modals/modal";

import TransactionDetails from "../../../components/modals/transactionDetails";
import Loader from "../../../components/Loader";

export default function CustomerList() {
	const [enrolled, setEnrolled] = useState(true);
	const [customers, setCustomers] = useState([]);
	const [PAYG, setPAYG] = useState([]);
	const [TModal, setModal] = useState(false);
	const [transactionIdd, setTransactionIdd] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const tableRef = useRef();

	const id = localStorage.getItem("stationId");
	const compId = localStorage.getItem("id");
	let refresh;

	const getCustomers = async () => {
		refresh && setIsLoading(true);
		axios.get(`/customers`).then((res) => {
			let index = 0;

			res.data.forEach((el) => {
				el.index = ++index;
			});

			setCustomers(res.data);
			setIsLoading(false);
		});
	};

	const getPAYG = async () => {
		axios.get(`/Customers/get-payg-transactions`).then((res) => {
			let index = 0;

			res.data.forEach((el) => {
				el.index = ++index;
			});

			setPAYG(res.data);
		});
	};

	useEffect(() => {
		refresh = true;
		getCustomers();
	}, []);

	useEffect(() => {
		enrolled ? getCustomers() : getPAYG();
	}, [enrolled]);

	let column = [
		{
			title: "#",
			dataIndex: "index",
			key: "index",
			width: "2%",
		},

		{
			title: "First name",
			dataIndex: "firstname",
			key: "firstname",
			width: "10%",
		},

		{
			title: "Last name",
			dataIndex: "lastname",
			key: "lastname",
			width: "10%",
		},

		{
			title: "Email address",
			dataIndex: "emailAddress",
			key: "emailAddress",
			width: "10%",
		},

		{
			title: "Money  Spent",
			dataIndex: "totalAmountSpent",
			key: "totalAmountSpent",
			width: "15%",
		},

		{
			title: "Phone number",
			dataIndex: "phonenumber			",
			key: "phonenumber			",
			width: "15%",
		},

		{
			title: "Number of Vehicles",
			dataIndex: "numberOfVehiclesOnFile",
			key: "numberOfVehiclesOnFile",
			width: "10%",
		},

		{
			title: "Energy consumed",
			dataIndex: "totalEnergyCharged",
			key: "totalEnergyCharged",
			width: "10%",
		},
		{
			title: "",
			dataIndex: "action",
			key: "action",
			render: (text, record) => (
				<NavLink
					to={{
						pathname: "/station/customer/details",
						search: `?cus=${record.id}&stationId=${id}&companyId=${compId}`,
					}}
				>
					<button className="flex justify-between bg-black text-white p-[0.5rem] rounded-md ">
						<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
						<p>View details</p>
					</button>
				</NavLink>
			),
			width: "20%",
		},
	];

	//table columns
	const PAYGcolumn = [
		{
			title: "#",
			dataIndex: "index",
			key: "index",
		},
		{
			title: "Date",
			dataIndex: "dateOfTransaction",
			key: "dateOfTransaction",
			render: (dateOfTransaction) => (
				<p>{moment(dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>
			),
		},
		{
			title: "Charger",
			dataIndex: "chargerName",
			key: "transactionId",
		},

		{
			title: "Charger Type",
			dataIndex: "chargerType",
			key: "Charger Type",
			render: () => <p>CICE</p>,
		},
		{
			title: "Amount",
			dataIndex: "totalAmount",
			key: "totalAmount",
			render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
		},
		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
			render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
		},
		{
			title: "Energy",
			dataIndex: "totalUnitChargedInEnergy",
			key: "totalUnitChargedInEnergy",
			render: (totalUnitChargedInEnergy) => (
				<p>
					{formatNumber(totalUnitChargedInEnergy)}
					kWh
				</p>
			),
		},

		{
			title: "Status",
			dataIndex: "transactionStatus",
			key: "transactionStatus",

			render: (transactionStatus) => (
				<button className="flex justify-between">
					<img
						src={activeDot}
						alt="Transaction was completed"
						className="pr-[0.25rem] mt-[6px]"
					/>
					<p className="text-[#15833C] font-semibold text-xs leading-5">
						Completed
					</p>
				</button>
			),
		},
		{
			title: "",
			dataIndex: "action",
			key: "action",

			render: (text, record) => (
				<button
					className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
					onClick={(e) => {
						setModal(true);
						setTransactionIdd(record.transactionId);
					}}
				>
					<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
					<p>View details</p>
				</button>
			),
		},
	];

	const getColumnsToPrint = () => {
		return column.filter((column) => column.key !== "action");
	};

	const getPAYGColumnsToPrint = () => {
		return PAYGcolumn.filter((column) => column.key !== "action");
	};

	return (
		<>
			{isLoading && (
				<section>
					<Loader />
				</section>
			)}

			{!isLoading && (
				<section>
					<section className={`mb-[var(--marginBtwSection)]`}>
						<div className={`flex justify-between items-center `}>
							<div>
								<h4 className="mb-[8px]">Customers</h4>
								<p className="subHeader">
									Get a review of your customer consumption summary
								</p>
							</div>
						</div>
					</section>

					<section className={`mb-[var(--marginBtwSection)]`}>
						<div className="flex justify-between">
							<div
								className={`flex justify-between w-[24rem] h-[4rem] bg-[var(--grey10)] items-center`}
							>
								<div
									className={`w-[50%]  h-[100%] cursor-pointer  ${
										enrolled
											? " border-b-4 border-black "
											: " border-b-4 border-[#E2E2E2)]"
									}  text-center font-semibold`}
									onClick={() => setEnrolled(true)}
								>
									<h5
										className={`text-sm pt-[1.25rem] ${
											enrolled ? " text-black" : "text-[var(--grey500)]"
										}`}
									>
										Enrolled
									</h5>
								</div>

								<div
									className={`w-[50%] cursor-pointer   h-[100%]  ${
										!enrolled
											? " border-b-4 border-black "
											: " border-b-4 border-[#E2E2E2)]"
									} text-center font-semibold`}
									onClick={() => setEnrolled(false)}
								>
									<h5
										className={`text-sm pt-[1.25rem] ${
											!enrolled ? " text-black" : "text-[var(--grey500)]"
										}`}
									>
										PAYG
									</h5>
								</div>
							</div>

							<ExportFile
								data={customers}
								name={"customers"}
								tableRef={tableRef}
							/>
						</div>

						{enrolled && (
							<>
								<div
									style={
										enrolled
											? { position: "absolute", top: "-9999px" }
											: { display: "none" }
									}
								>
									<div ref={tableRef}>
										<Table
											columns={getColumnsToPrint()}
											dataSource={customers}
											pagination={false}
										/>
									</div>
								</div>

								<Table columns={column} dataSource={customers} />
							</>
						)}

						{!enrolled && (
							<>
								<div
									style={
										!enrolled
											? { position: "absolute", top: "-9999px" }
											: { display: "none" }
									}
								>
									<div ref={tableRef}>
										<Table
											columns={getPAYGColumnsToPrint()}
											dataSource={PAYG}
											pagination={false}
										/>
									</div>
								</div>

								<Table columns={PAYGcolumn} dataSource={PAYG} />
							</>
						)}

						{TModal && (
							<Modal closeModal={setModal}>
								<TransactionDetails transactionId={transactionIdd} />
							</Modal>
						)}
					</section>
				</section>
			)}
		</>
	);
}
