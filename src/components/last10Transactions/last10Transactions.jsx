import React, { useState, useEffect, useRef } from "react";

import { Table } from "antd";
import axios from "../../lib/axiosInterceptor";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";
import activeDot from "../../assets/svg/activeDot.svg";
import eye from "../../assets/svg/eye.svg";
import Modal from "../modals/modal";
import TransactionDetails from "../modals/transactionDetails";
import ExportFile from "../exportComponent/ExportFile";
import { useSearchParams } from "react-router-dom";
import { FilterMatchMode, FilterOperator } from 'primereact/api';

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 
import { chargerType } from "../../utils/chargerType";

const Last10Transactions = (props) => {
  const [chargerTransactions, setchargerTransactions] = useState([]);
  const [TModal, setModal] = useState(false);
  const [transactionIdd, setTransactionIdd] = useState();
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
	global: { value: null, matchMode: FilterMatchMode.CONTAINS },
	
});
const [globalFilterValue, setGlobalFilterValue] = useState('')

  const tableRef = useRef();

  // const id = props.chargerId;

  const [searchParams] = useSearchParams();

  let id = searchParams.get("chargerId");

  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);

  // transactions for specific charger
  const transactions = () => {
    const limit = 10;
    axios
      .get(`/Transactions/get-last10-transactions/charger/${id}/${limit}`)
      .then((res) => {
        let index = 0;

        res.data?.sort((a, b) => b?.id - a?.id);
        res.data.forEach((el) => {
          el.index = ++index;
        });

        setchargerTransactions(res.data);
      });
  };

  useEffect(() => {
    transactions();
  }, []);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  const getDate = (chargerTransactions) =>{
	return (<p>{ moment(chargerTransactions.dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>)
  }

  const ChargerName = (chargerTransactions) =>{
	return (<p>{chargerTransactions.chargerName}</p>)
  }

  const ChargerType = (chargerTransactions) =>{
	return (<p>{chargerType(chargerTransactions.chargerType) }</p>)
  }

  const totalAmount = (chargerTransactions) =>{
	return (<p>{formatNumber( chargerTransactions.totalAmount, true)}</p>)
  }

  const balance = (chargerTransactions) =>{
	return (<p>{chargerTransactions.balance}</p>)
  }

  const Energy = (chargerTransactions) =>{
	return (<p>{formatNumber(chargerTransactions.totalUnitChargedInEnergy, false)} KWH</p>)
  }

  const index = (chargerTransactions) =>{
	return (<p>{chargerTransactions.index}</p>)
  }

  const Status = (chargerTransactions) =>{
	return (<button className="flex justify-between">
				<img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
				<p className="text-[#15833C] font-semibold text-xs leading-5">
				{chargerTransactions.transactionStatus}
				</p>
				</button>)
  }

  const action = (chargerTransactions) =>{
	return (<button
					className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
						onClick={(e) => {
							setModal(true);
						setTransactionIdd(chargerTransactions.transactionId);
						}}
					>
					<img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
						<p>View details</p>
					</button>)
  }

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
  // 				KWH
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
  // 				<img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
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
        className={`mb-[var(--marginBtwElements)] items-center flex justify-between `}
      >
        <h3>LAST 10 TRANSACTIONS</h3>

        <ExportFile
          data={chargerTransactions}
          name={"Charger Transactions"}
          tableRef={tableRef}
        />
      </div>

      <div>
     

        <DataTable
          value={chargerTransactions}
          tableStyle={{ minWidth: "100%" }}
          size={size}
          removableSort
		  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
		  filters={filters} 
		  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		  currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
		  globalFilterFields={['dateOfTransaction', 'chargerName', 'ChargerType', 'totalUnitChargedInEnergy', 'status', 'totalAmount']} header={header} emptyMessage="No transactions found.">
			
			<Column field="index" header="#"  ></Column>
          <Column field="dateOfTransaction" header="Date" body={getDate}  sortable></Column>
          <Column field="chargerName"  header="Charger"   sortable></Column>
          <Column field="chargerType" header="Charger Type" sortable body={ChargerType}></Column>
          <Column field="totalAmount" header="Amount"  sortable body={totalAmount}></Column>
		  {/* <Column field="Balance" header="Balance" sortable body={balance}></Column> */}
          <Column field="totalUnitChargedInEnergy" header="Energy" body={Energy} sortable></Column>
          <Column field="Status" header="Status"   body={Status}></Column>
		  <Column field="Action" header="Action"   body={action}></Column>
        </DataTable>
      </div>
      {TModal && (
        <Modal closeModal={setModal}>
          <TransactionDetails transactionId={transactionIdd} />
        </Modal>
      )}
    </section>
  );
};

export default Last10Transactions;
