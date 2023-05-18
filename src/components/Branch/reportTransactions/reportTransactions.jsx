import React, { useState, useEffect } from "react";

import { Table } from "antd";
import axios from "../../../lib/axiosInterceptor";
import { formatNumber } from "../../../utils/formatNumber";
import moment from "moment";
import activeDot from "../../../assets/svg/activeDot.svg";
import eye from "../../../assets/svg/eye.svg";
import Modal from "../../modals/modal";
import TransactionDetails from "../../modals/transactionDetails";
import CsvExport from "../../exportComponent/csvExport";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const ReportTransactions = ({ stationId }) => {
	const [TModal, setModal] = useState(false);
	const [allTransactions, setAllTransactions] = useState([]);
	const [transactionIdd, setTransactionIdd] = useState();

	//api call

	//all station transactions
	const CTransactions = () => {
		axios
			.get(`/Transactions/get-all-transactions/station/${stationId}`)
			.then((res) => {
				let index = 0;

				res.data.forEach((el) => {
					el.index = ++index;
				});

				setAllTransactions(res.data);
			});
	};

	//on mount get data
	useEffect(() => {
		CTransactions();
	}, []);

	 //excel export
	//  const handleExport = () => {
	// 	let wb = XLSX.utils.book_new();
	// 	let ws = XLSX.utils.json_to_sheet(allTransactions);
	
	// 	XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
	
	// 	XLSX.writeFile(wb, "report.xlsx");
	//   };

		// pdf export 
	const doc = new jsPDF('potrait','pt','a4')
	

	const exportPDF = () =>{

		doc.html(document.querySelector('#report')).then(() => {
			doc.save('report.pdf');
		});
		  
		 
	}



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
			dataIndex: "",
			key: "",
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

	return (
		<section>
			<div className={`mb-[var(--marginBtwElements)] flex justify-between`}>
				<h3> TRANSACTION LIST</h3>
				<button onClick={exportPDF}>Pdf Export </button>

			  <CsvExport data={allTransactions} name={"report"} />
			</div>

			<div id="report">
				<Table
					columns={Columns}
					pagination={false}
					dataSource={allTransactions}
				/>
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
