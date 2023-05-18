import React, { useState, useEffect, useRef } from "react";
import EditPrice from "../../../components/modals/editPrice";
import Modal from "../../../components/modals/modal";
import axios from "../../../lib/axiosInterceptor";
import { useSearchParams } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import CICEBilling from "../../../components/Branch/BilllingComponent/CICEBilling";
import ACBilling from "../../../components/Branch/BilllingComponent/ACBilling";
import DCBilling from "../../../components/Branch/BilllingComponent/DCBilling";
import PriceChangeCard from "../../../components/Branch/BilllingComponent/PriceChangeCard";
import { Table } from "antd";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx/xlsx.mjs";
import CsvExport from "../../../components/exportComponent/csvExport";

export default function StationBilling() {
	const [reloadPage, setReloadPage] = useState(false);
	const [priceModal, setPriceModal] = useState(false);
	const [billingLog, setBillingLog] = useState([]);
	const [details, setDetails] = useState();
	const [changeHIstory, setChangeHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [searchParams] = useSearchParams();

	let companyId = searchParams.get("companyId");
	let stationId = searchParams.get("stationId");
	//billing log
	const Billings = () => {
		setIsLoading(true);
		axios
			.get(`/Billings/get-all-billing-log/${companyId}/${stationId}`)
			.then((res) => {
				let index = 0;
				res?.data?.forEach((el) => {
					el.index = ++index;
				});

				setBillingLog(res.data);
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			})
			.catch((err) => {
				toast.error(err.response.data);
				setIsLoading(false);
			});
	};
	const CurrentBilling = () => {
		axios
			.get(`/Billings/get-current-billing/${companyId}/${stationId}`)
			.then((res) => {
				setChangeHistory(res.data);
			});
	};

	const openModal = (type, billingType, prevPrice) => {
		setPriceModal(true);
		setDetails({
			type,
			billingType,
			prevPrice,
		});
	};

	//change price

	useEffect(() => {
		Billings();
		CurrentBilling();
	}, []);

	useEffect(() => {
		if (!priceModal && reloadPage) {
			CurrentBilling();
			Billings();
			setReloadPage(false);
		}
	}, [priceModal]);

	let latestChange = changeHIstory
		?.filter((el) => el.chargerType.toLowerCase() !== "bms")
		?.sort((a, b) => b?.id - a?.id);

	let cicePrice = changeHIstory?.filter(
		(el) => el.chargerType.toLowerCase() === "cice"
	);
	let acPrice = changeHIstory?.filter(
		(el) => el.chargerType.toLowerCase() === "ac"
	);
	let dcPrice = changeHIstory?.filter(
		(el) => el.chargerType.toLowerCase() === "dc"
	);

	//excel export
	const handleExport = () => {
		let wb = XLSX.utils.book_new();
		let ws = XLSX.utils.json_to_sheet(billingLog);

		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

		XLSX.writeFile(wb, "priceChangeLog.xlsx");
	};

	let column = [
		{
			title: "#",
			dataIndex: "index",
			key: "index",
		},

		{
			title: "Time updated",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (text, record) => {
				return moment(record.createdAt).format("MMM DD, YYYY. h:mm A");
			},
		},

		{
			title: "Charger Type",
			dataIndex: "chargerType",
			key: "chargerType",
			render: (text, record) => {
				return record.chargerType.toUpperCase();
			},
		},

		{
			title: "Billing Type",
			dataIndex: "billingType",
			key: "billingType",
		},

		{
			title: "Previous Price",
			dataIndex: "previousCostPerUnitCharge",
			key: "previousCostPerUnitCharge",
			render: (text, record) => {
				return formatNumber(record.previousCostPerUnitCharge, true);
			},
		},

		{
			title: " Price Change",
			dataIndex: "costPerUnitCharge",
			key: "costPerUnitCharge",
			render: (text, record) => {
				return formatNumber(record.costPerUnitCharge, true);
			},
		},
	];

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
								<h4 className="mb-[8px]">Billing</h4>
								<p className="subHeader">Set your charger billing and price</p>
							</div>
							{/* <div>
				<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey900)]">
					General price change{" "}
				</button>
			</div> */}
						</div>
					</section>

					<section className={`mb-[var(--marginBtwSection)]`}>
						<div className=" grid grid-cols-12  gap-4  ">
							<div className="  col-span-9">
								<CICEBilling openModal={openModal} price={cicePrice} />

								<ACBilling openModal={openModal} price={acPrice} />

								<DCBilling openModal={openModal} price={dcPrice} />
							</div>

							<div className="  col-span-3 items-start   ">
								<h3 className={` pl-4 mb-3`}>PRICE CHANGE HISTORY</h3>
								<div className="p-4  max-h-[80vh] overflow-y-auto">
									<div className="h-[100%] ">
										{/* CICE PRICE */}
										{latestChange?.map((history, index) => (
											<PriceChangeCard history={history} key={index} />
										))}
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={`mb-[var(--marginBtwSection)]`}>
						<div className="flex justify-between">
							<h3 className={`mb-5`}>PRICE CHANGE LOG</h3>

							<div className="flex justify-between">
								<div className=" bg-black text-white p-[0.5rem] rounded-md ">
									<CSVLink
										data={billingLog}
										// headers={headers}
										filename="Transactions.csv"
										target="_blank"
									>
										CSV Export
									</CSVLink>
								</div>
								<div>
									<button
										onClick={handleExport}
										className=" bg-black text-white p-[0.5rem] rounded-md ml-[0.5rem]"
									>
										Excel export
									</button>
								</div>
								{/* <div>
				<button onClick={exportPDF} className=" bg-black text-white p-[0.5rem] rounded-md">PDF export</button>
			  </div> */}
							</div>
						</div>

						<Table columns={column} dataSource={billingLog} pagination={true} />
					</section>

					{priceModal && (
						<Modal closeModal={setPriceModal}>
							<EditPrice
								closeModal={setPriceModal}
								details={details}
								setReloadPage={setReloadPage}
							/>
						</Modal>
					)}
				</section>
			)}
		</>
	);
}
