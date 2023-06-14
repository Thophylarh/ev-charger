
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

import { useNavigate } from "react-router";

import Highlighter from 'react-highlight-words';

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


export default function CustomerList() {
	const [enrolled, setEnrolled] = useState(true);
	const [customers, setCustomers] = useState([]);
	const [PAYG, setPAYG] = useState([]);
	const [TModal, setModal] = useState(false);
	const [transactionIdd, setTransactionIdd] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const Navigate = useNavigate();

	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		
	});
	const [globalFilterValue, setGlobalFilterValue] = useState('')

	const tableRef = useRef();

	const [sizeOptions] = useState([
		{ label: "Small", value: "small" },
		{ label: "Normal", value: "normal" },
		{ label: "Large", value: "large" },
	  ]);
	  const [size, setSize] = useState(sizeOptions[0].value);

	const id = localStorage.getItem("stationId");
	const compId = localStorage.getItem("id");
	let refresh;

	const getCustomers = async () => {
		refresh && setIsLoading(true);
		axios.get(`/customers`).then((res) => {
			console.log(res)
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


	
	
	  const action = (customers) =>{
		return (<button
						className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
							onClick={(e) => {
							Navigate({
								pathname: '/station/customer/details',
								search: `?cus=${customers.id}`
							})
							}}
						>
						<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
							<p>View details</p>
						</button>)
	  }


	  const totalAmount = (customers) =>{
		return (<p>{formatNumber( customers.totalAmountSpent, true)}</p>)
	  }

	  const Energy = (customers) =>{
		return (<p>{formatNumber(customers.totalEnergyCharged, false)} KWH</p>)
	  }

	  const getDate = (PAYG) =>{
		return (<p>{ moment(PAYG.dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>)
	  }

	  const ChargerType = (PAYG) =>{
		return (<p>{chargerType(PAYG.chargerType) }</p>)
	  }

	  const Status = (PAYG) =>{
		return (<button className="flex justify-between">
					<img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
					<p className="text-[#15833C] font-semibold text-xs leading-5">
					{PAYG.transactionStatus}
					</p>
					</button>)
	  }

	  const actionPAYG = (PAYG) =>{
		return (<button
						className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
							onClick={(e) => {
								setModal(true);
							setTransactionIdd(PAYG.transactionId);
							}}
						>
						<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
							<p>View details</p>
						</button>)
	  }
	  
	
	//table columns
	// const PAYGcolumn = [
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

	// 	{
	// 		title: "Status",
	// 		dataIndex: "transactionStatus",
	// 		key: "transactionStatus",

	// 		render: (transactionStatus) => (
	// 			<button className="flex justify-between">
	// 				<img
	// 					src={activeDot}
	// 					alt="Transaction was completed"
	// 					className="pr-[0.25rem] mt-[6px]"
	// 				/>
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
	// 	return column.filter((column) => column.key !== "action");
	// };

	// const getPAYGColumnsToPrint = () => {
	// 	return PAYGcolumn.filter((column) => column.key !== "action");
	// };

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
								<div>
									<div >
									<DataTable
          value={customers}
          tableStyle={{ minWidth: "100%" }}
		  
		  paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
		  filters={filters} 
		  removableSort
		  size={size}
		  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		  currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
		  globalFilterFields={['firstname', 'lastname', 'emailAddress', 'totalAmountSpent', 'totalEnergyCharged',]} header={header} emptyMessage="No customers found.">
			
			<Column field="index" header="#"  ></Column>
          {/* <Column field="dateOfTransaction"  header="Date"   sortable ></Column> */}
          <Column field="lastname" header="Last Name" sortable ></Column>
          <Column field="emailAddress" header="Email"  sortable ></Column>
		  <Column field="totalAmountSpent" header="Money spent" sortable body={totalAmount}></Column>
          <Column field="totalEnergyCharged" header="Energy"  sortable body={Energy}></Column>
          
		  <Column field="Action" header="Action"  body={action} ></Column>
        </DataTable>
									</div>
								</div>

								
							</>
						)}

						{!enrolled && (
							<>
								<div
									
								>
									<div>
									<DataTable
          value={PAYG}
          tableStyle={{ minWidth: "100%" }}
		  size={size}
		  paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
		  filters={filters} 
		  removableSort
		  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		  currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
		  globalFilterFields={['dateOfTransaction', 'chargerName', 'chargerType', 'totalAmount', 'totalUnitChargedInEnergy', 'transactionStatus']} header={header} emptyMessage="No transactions found.">
			
			<Column field="index" header="#"  ></Column>
          <Column field="dateOfTransaction"  header="Date"  sortable body={getDate} ></Column>
          <Column field="chargerName" header="Charger" sortable ></Column>
          <Column field="chargerType" header="Charger Type"  sortable body={ChargerType}></Column>
		  <Column field="totalAmount" header="Money spent" sortable body={totalAmount}></Column>
		  <Column field="totalUnitChargedInEnergy" header="Energy"  sortable body={Energy}></Column>
		  <Column field="transactionStatus" header="Status"  body={Status}  ></Column>
		  <Column field="action" header="action" body={actionPAYG}  ></Column>
        </DataTable>
									</div>
								</div>

								{/* <Table columns={PAYGcolumn} dataSource={PAYG} /> */}
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
