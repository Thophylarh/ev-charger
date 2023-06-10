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
import ExportFile from "../../../components/exportComponent/ExportFile";


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

export default function StationBilling() {
	const [reloadPage, setReloadPage] = useState(false);
	const [priceModal, setPriceModal] = useState(false);
	const [billingLog, setBillingLog] = useState([]);
	const [details, setDetails] = useState();
	const [changeHIstory, setChangeHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [filters, setFilters] = useState({
		global: { value: null, matchMode: FilterMatchMode.CONTAINS },
		
	});
	const [globalFilterValue, setGlobalFilterValue] = useState('')

	const tableRef = useRef();

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

	const updatedBY = (billingLog) =>{
		return (
			<p>{billingLog.updatedBy.emailAddress}</p>
		)
	}

	const createdAt = (billingLog) =>{
		return(
			<p>{ moment(billingLog.createdAt).format("MMM DD, YYYY. h:mm A")}</p>
		)
	}

	const PriceChange = (billingLog) =>{
		return (<p>{formatNumber( billingLog.costPerUnitCharge, true)}</p>)
	  }

	  const previous = (billingLog) =>{
		return (<p>{formatNumber( billingLog.previousCostPerUnitCharge, true)}</p>)
	  }
	// let column = [
	// 	{
	// 		title: "#",
	// 		dataIndex: "index",
	// 		key: "index",
	// 	},

	// 	{
	// 		title: "Updated By",
	// 		dataIndex: "updatedBy",
	// 		key: "updatedBy",
	// 		render: (text, record) => {
	// 			return record.updatedBy.emailAddress;
	// 		},
	// 	},

	// 	{
	// 		title: "Time updated",
	// 		dataIndex: "createdAt",
	// 		key: "createdAt",
	// 		render: (text, record) => {
	// 			return moment(record.createdAt).format("MMM DD, YYYY. h:mm A");
	// 		},
	// 	},

	

	// 	{
	// 		title: "Charger Type",
	// 		dataIndex: "chargerType",
	// 		key: "chargerType",
	// 		render: (text, record) => {
	// 			return record.chargerType.toUpperCase();
	// 		},
	// 	},

	// 	{
	// 		title: "Billing Type",
	// 		dataIndex: "billingType",
	// 		key: "billingType",
	// 	},

	// 	{
	// 		title: "Previous Price",
	// 		dataIndex: "previousCostPerUnitCharge",
	// 		key: "previousCostPerUnitCharge",
	// 		render: (text, record) => {
	// 			return formatNumber(record.previousCostPerUnitCharge, true);
	// 		},
	// 	},

	// 	{
	// 		title: " Price Change",
	// 		dataIndex: "costPerUnitCharge",
	// 		key: "costPerUnitCharge",
	// 		render: (text, record) => {
	// 			return formatNumber(record.costPerUnitCharge, true);
	// 		},
	// 	},
	// ];

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
						<div className=" grid grid-cols-12  gap-2  ">
							<div className="  col-span-9">
								<CICEBilling openModal={openModal} price={cicePrice} />

								<ACBilling openModal={openModal} price={acPrice} />

								<DCBilling openModal={openModal} price={dcPrice} />
							</div>

							<div className="  col-span-3 items-start   ">
								<h3 className={` pl-4 mb-3`}>PRICE CHANGE HISTORY</h3>
								<div className="py-4 px-3  max-h-[80vh] overflow-y-auto">
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
						<div className="flex justify-between items-center">
							<h3 className={`mb-5`}>PRICE CHANGE LOG</h3>
							<ExportFile
								data={billingLog}
								name={"Price Change Log"}
								tableRef={tableRef}
							/>
						</div>

						
						<div>
							
						<DataTable
          value={billingLog}
          tableStyle={{ minWidth: "100%" }}
		  stripedRows
		  paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}
		  filters={filters} filterDisplay="row"
		  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		  currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
		  globalFilterFields={['emailAddress', 'createdAt', 'chargerType', 'billingType', 'previousCostPerUnitCharge', 'costPerUnitCharge']} header={header} emptyMessage="No logs found.">
			
			<Column field="index" header="#"  ></Column>
          <Column field="emailAddress" header="Updated By" sortable body={updatedBY} ></Column>
          <Column field="createdAt"  header="Created At"   sortable body={createdAt}></Column>
          <Column field="chargerType" header="Charger Type" sortable ></Column>
          <Column field="billingType" header="Billing Type"  sortable ></Column>
           <Column field="previousCostPerUnitCharge" header="Previous price"  sortable body={previous} ></Column>
          <Column field="costPerUnitCharge" header="priceChange" sortable body={PriceChange}></Column>
		  
        </DataTable> 
						</div>
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
