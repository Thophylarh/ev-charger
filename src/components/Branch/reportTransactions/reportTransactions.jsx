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

import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 
import { chargerType } from "../../../utils/chargerType";


const { RangePicker } = DatePicker;

const ReportTransactions = ({ stationId, selectedDate }) => {
	const [TModal, setModal] = useState(false);
	const [allTransactions, setAllTransactions] = useState([]);
	const [transactionIdd, setTransactionIdd] = useState();
	// const [selectedDate, setDate] = useState()

	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		
	});
	const [globalFilterValue, setGlobalFilterValue] = useState('')

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

	const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		let _filters = { ...filters };
	
		_filters['global'].value = value;
	
		setFilters(_filters);
		setGlobalFilterValue(value);
	};
	
	  const renderHeader = () => {
		return (
			<div className="flex justify-content-end">
				<span className="p-input-icon-left">
					<i className="pi pi-search" />
					<InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
				</span>
			</div>
		);
	};

	const header = renderHeader();

	const Status = (allTransactions) =>{
		return (<button className="flex justify-between">
					<img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
					<p className="text-[#15833C] font-semibold text-xs leading-5">
					{allTransactions.transactionStatus}
					</p>
					</button>)
	  }
	
	  const action = (allTransactions) =>{
		return (<button
						className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
							onClick={(e) => {
								setModal(true);
							setTransactionIdd(allTransactions.transactionId);
							}}
						>
						<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
							<p>View details</p>
						</button>)
	  }

	  const getDate = (allTransactions) =>{
		return (<p>{ moment(allTransactions.dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>)
	  }

	  const ChargerType = (allTransactions) =>{
		return (<p>{chargerType( allTransactions.chargerType) }</p>)
	  }

	  const totalAmount = (allTransactions) =>{
		return (<p>{formatNumber( allTransactions.totalAmount, true)}</p>)
	  }

	  const Energy = (allTransactions) =>{
		return (<p>{formatNumber(allTransactions.totalUnitChargedInEnergy, false)} KWH</p>)
	  }

	// const Columns = [
	// 	{
	// 		title: "#",
	// 		dataIndex: "index",
	// 		key: "index",
	// 	},
	// 	{
	// 		title: "Date",
	// 		dataIndex: "dateOfTransaction",
	// 		key: "dateOfTransaction",
	// 		render: (dateOfTransaction) => (
	// 			<p>{moment(dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>
	// 		),
	// 	},
	// 	{
	// 		title: "Charger",
	// 		dataIndex: "chargerName",
	// 		key: "transactionId",
	// 	},

	// 	{
	// 		title: "Charger Type",
	// 		dataIndex: "chargerType",
	// 		key: "Charger Type",
	// 		render: () => <p>CICE</p>,
	// 	},
	// 	{
	// 		title: "Amount",
	// 		dataIndex: "totalAmount",
	// 		key: "totalAmount",
	// 		render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
	// 		sorter: {
	// 			compare: (a, b) => a.totalAmount - b.totalAmount,
	// 			multiple: 3,
	// 		  },
	// 	},
	// 	{
	// 		title: "Balance",
	// 		dataIndex: "balance",
	// 		key: "balance",
	// 		render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
	// 		sorter: {
	// 			compare: (a, b) => a.balance - b.balance,
	// 			multiple: 3,
	// 		  },
	// 	},
	// 	{
	// 		title: "Energy",
	// 		dataIndex: "totalUnitChargedInEnergy",
	// 		key: "totalUnitChargedInEnergy",
	// 		render: (totalUnitChargedInEnergy) => (
	// 			<p>
	// 				{formatNumber(totalUnitChargedInEnergy)}
	// 				kWh
	// 			</p>
	// 		),
	// 		sorter: {
	// 			compare: (a, b) => a.totalUnitChargedInEnergy - b.totalUnitChargedInEnergy,
	// 			multiple: 3,
	// 		  },
	// 	},

	// 	// {
	// 	//     title: "Charge Duration",
	// 	//     dataIndex: "totalUnitChargedInTime",
	// 	//     key: "totalUnitChargedInTime",
	// 	//     render: (totalUnitChargedInTime) => (
	// 	//         <p>{formatNumber(totalUnitChargedInTime / 60)} hour(s)</p>
	// 	//     ),
	// 	// },
	// 	{
	// 		title: "Status",
	// 		dataIndex: "transactionStatus",
	// 		key: "transactionStatus",
	// 		render: (transactionStatus) => (
	// 			<button className="flex justify-between">
	// 				<img src={activeDot} alt="active" className="pr-[0.25rem] mt-[6px]" />
	// 				<p className="text-[#15833C] font-semibold text-xs leading-5">
	// 					Completed
	// 				</p>
	// 			</button>
	// 		),
	// 	},
	// 	{
	// 		title: "",
	// 		dataIndex: "action",
	// 		key: "action",
	// 		render: (text, record) => (
	// 			<button
	// 				className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
	// 				onClick={(e) => {
	// 					setModal(true);
	// 					setTransactionIdd(record.transactionId);
	// 				}}
	// 			>
	// 				<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
	// 				<p>View details</p>
	// 			</button>
	// 		),
	// 	},
	// ];

	// const getColumnsToPrint = () => {
	// 	return Columns.filter((column) => column.key !== "action");
	// };

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
				{/* <Table
					columns={Columns}
					
					dataSource={allTransactions}
				/> */}

				<div >
					<div>
					<DataTable
          value={allTransactions}
          tableStyle={{ minWidth: "100%" }}
		  stripedRows
		  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
		  filters={filters} filterDisplay="row"
		  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		  currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
		  globalFilterFields={['dateOfTransaction', 'chargerName', 'ChargerType', 'totalUnitChargedInEnergy', 'status', 'totalAmount']} header={header} emptyMessage="No transactions found.">
			
			<Column field="index" header="#"  ></Column>
          <Column field="dateOfTransaction" header="Date" sortable body={getDate}></Column>
          <Column field="chargerName"  header="Charger"   sortable ></Column>
          <Column field="chargerType" header="Charger Type" sortable body={ChargerType}></Column>
          <Column field="totalAmount" header="Amount"  sortable body={totalAmount}></Column>
		  {/* <Column field="Balance" header="Balance" sortable body={balance}></Column> */}
          <Column field="totalUnitChargedInEnergy" header="Energy"  sortable body={Energy}></Column>
          <Column field="Status" header="Status"  body={Status} ></Column>
		  <Column field="Action" header="Action"  body={action} ></Column>
        </DataTable>
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
