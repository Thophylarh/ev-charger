import React, { useState, useEffect, useRef } from "react";

import { Table } from "antd";
import { DatePicker } from "antd";
import axios from "../../../lib/axiosInterceptor";
import { formatNumber } from "../../../utils/formatNumber";
import moment from "moment";
import activeDot from "../../../assets/svg/activeDot.svg";
import eye from "../../../assets/svg/eye.svg";
import Modal from "../../modals/modal";
import TransactionDetails from "../../modals/transactionDetails";
import ExportFile from "../../exportComponent/ExportFile";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const { RangePicker } = DatePicker;

const ReportTransactions = ({ stationId, selectedDate }) => {
	const [TModal, setModal] = useState(false);
	const [allTransactions, setAllTransactions] = useState([]);
	const [transactionIdd, setTransactionIdd] = useState();
	// const [selectedDate, setDate] = useState()

	const tableRef = useRef();

	//api call

	//all station transactions
	const CTransactions = () => {
		let url;
		if (selectedDate === "" || !selectedDate) {
			url = `/Transactions/get-all-transactions/station/${stationId}`;
		} else {
			// let splitDate = selectedDate.split(",")
			// let start = selectedDate[0]
			// let end = selectedDate[1]

			url = `/Transactions/get-all-transactions-by-date/station/${stationId}/${selectedDate[0]}/${selectedDate[1]}`;
		}
		axios.get(url).then((res) => {
			let index = 0;

			res.data.forEach((el) => {
				el.index = ++index;
			});

			setAllTransactions(res.data);
		});
	};

	// //date picker function
	// const selectDate = (date, dateString) =>{
	// 	setDate(dateString)

	// }

	//on mount get data
	useEffect(() => {
		CTransactions();
	}, [selectedDate]);

	//excel export
	//  const handleExport = () => {
	// 	let wb = XLSX.utils.book_new();
	// 	let ws = XLSX.utils.json_to_sheet(allTransactions);

	// 	XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

	// 	XLSX.writeFile(wb, "report.xlsx");
	//   };

	// pdf export
	const doc = new jsPDF("potrait", "pt", "a4");

	const exportPDF = () => {
		doc.html(document.querySelector("#report")).then(() => {
			doc.save("report.pdf");
		});
	};

	const Columns = [
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

		// {
		//     title: "Charge Duration",
		//     dataIndex: "totalUnitChargedInTime",
		//     key: "totalUnitChargedInTime",
		//     render: (totalUnitChargedInTime) => (
		//         <p>{formatNumber(totalUnitChargedInTime / 60)} hour(s)</p>
		//     ),
		// },
		{
			title: "Status",
			dataIndex: "transactionStatus",
			key: "transactionStatus",
			render: (transactionStatus) => (
				<button className="flex justify-between">
					<img src={activeDot} alt="active" className="pr-[0.25rem] mt-[6px]" />
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
		return Columns.filter((column) => column.key !== "action");
	};

	return (
		<section>
			<div
				className={`mb-[var(--marginBtwElements)] align-center flex justify-between`}
			>
				<h3> TRANSACTION LIST</h3>
				{/* <RangePicker onChange={selectDate}/> */}
				{/* <button onClick={exportPDF}>Pdf Export </button> */}

				<ExportFile
					data={allTransactions}
					name={"Report"}
					tableRef={tableRef}
				/>
			</div>

			<div id="report">
				<Table
					columns={Columns}
					pagination={false}
					dataSource={allTransactions}
				/>

				<div style={{ position: "absolute", top: "-9999px" }}>
					<div>
						<Table
							ref={tableRef}
							dataSource={allTransactions}
							columns={getColumnsToPrint()}
							pagination={false}
						/>
					</div>
				</div>
			</div>
			{TModal && (
				<Modal closeModal={setModal}>
					<TransactionDetails transactionId={transactionIdd} />
				</Modal>
			)}
		</section>
	);
};

export default ReportTransactions;
