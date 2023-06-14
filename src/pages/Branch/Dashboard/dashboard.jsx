import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

import axios from "../../../lib/axiosInterceptor";
import "./style.css";

import ChargersCard from "../../../components/Company/ChargersCard";

import { DatePicker, Table } from "antd";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";
import activeDot from "../../../assets/svg/activeDot.svg";
import eye from "../../../assets/svg/eye.svg";

import StationDashboardOverview from "../../../components/Branch/DashboardComponents/Overview";
import ChartOverview from "../../../components/Branch/DashboardComponents/ChartOverview";

import Modal from "../../../components/modals/modal";
import TransactionDetails from "../../../components/modals/transactionDetails";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import ExportFile from "../../../components/exportComponent/ExportFile";
import ReactToPrint from "react-to-print";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { chargerType } from "../../../utils/chargerType";

export default function Dashboardd() {
  const [transaction, setTransaction] = useState([]);
  const [stationChargerList, setStationChargerList] = useState([]);
  const [TModal, setModal] = useState(false);
  const [transactionIdd, setTransactionIdd] = useState();
  const [newDate, setNewDate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [stationName, setStationName] = useState("");

  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  let stationId = searchParams.get("stationId");

  let companyId = searchParams.get("companyId");

  const tableRef = useRef();
  // API CALLS

  //station details
  const GetDetails = () => {
    axios.get(`/Stations/get-station-by-id/${stationId}`).then((res) => {
      setStationName(res?.data[0]?.StationName);
    });
  };

  //last 10 transactions
  const getTransactions = async () => {
    axios
      .get(`/Transactions/get-last10-transactions/station/${stationId}/10`)
      .then((res) => {
        let index = 0;

        res.data.sort((a, b) => b.id - a.id);
        res.data.forEach((el) => {
          el.index = ++index;
        });

        setTransaction(res.data);
      });
  };

  //get list of chargers in station
  const getListOfChargers = () => {
    setIsLoading(true);
    axios
      .get(`/Chargers/get-list-station-charger/${companyId}/${stationId}`)
      .then((res) => {
        setStationChargerList(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        toast.error(err);
        setIsLoading(false);
      });
  };

  // CUSTOM FUNCTIONS
  const onSelectDate = (date, dateString) => {
    setNewDate(dateString);
  };

  useEffect(() => {
    getTransactions();
    getListOfChargers();
    GetDetails();
  }, []);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  console.log(transactionIdd);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
		<>
      <div className="flex  justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
	  {/* <div className="flex align-items-center justify-content-end gap-2">
	  <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
	  <Button type="button" icon="pi pi-file-excel" severity="success" rounded  data-pr-tooltip="XLS" />
	  <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded  data-pr-tooltip="PDF" />
  </div> */}
  </>
    );
  };

  

  

  const Status = (transaction) => {
    return (
      <button className="flex justify-between">
        <img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
        <p className="text-[#15833C] font-semibold text-xs leading-5">
          {transaction.transactionStatus}
        </p>
      </button>
    );
  };

  const action = (transaction) => {
    return (
      <button
        className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
        onClick={(e) => {
          setModal(true);
          console.log(transaction?.transactionId);
          setTransactionIdd(transaction?.transactionId);
        }}
      >
        <img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
        <p>View details</p>
      </button>
    );
  };

  const getDate = (chargerTransactions) => {
    return (
      <p>
        {moment(chargerTransactions.dateOfTransaction).format(
          " MMMM DD YYYY HH:mm"
        )}
      </p>
    );
  };

  const ChargerType = (chargerTransactions) => {
    return <p>{chargerType(chargerTransactions.chargerType)}</p>;
  };

  const totalAmount = (chargerTransactions) => {
    return <p>{formatNumber(chargerTransactions.totalAmount, true)}</p>;
  };

  const Energy = (chargerTransactions) => {
    return (
      <p>
        {formatNumber(chargerTransactions.totalUnitChargedInEnergy, false)} KWH
      </p>
    );
  };

//   const exportCSV = (selectionOnly) => {
// 	tableRef.current.exportCSV({ selectionOnly });
// };


  const headers = renderHeader();

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
                <h4 className="mb-[8px]">Hello, {stationName}</h4>
                <p className="subHeader">
                  Here is an overview and breakdown of your station energy
                  revenue and consumption.
                </p>
              </div>
              <div>
                <DatePicker picker="month" onChange={onSelectDate} />
              </div>
            </div>
          </section>

          <StationDashboardOverview stationId={stationId} newDate={newDate} />

          <ChartOverview newDate={newDate} />

          <section className={`mb-[var(--marginBtwSection)]`}>
            <div className="flex justify-between items-center mb-[var(--marginBtwElements)]">
              <h3>STATION CHARGERS</h3>

              <NavLink
                to={{
                  pathname: "/station/evChargers",
                  search: `?stationId=${stationId}&companyId=${companyId}`,
                }}
              >
                <button className="border-[0.5px]  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)]">
                  See all chargers
                </button>
              </NavLink>
            </div>

            <div className="bg-[var(--grey50)] p-[1.25rem] grid grid-cols-3 gap-4">
              {stationChargerList.map((charger, index) => (
                <ChargersCard charger={charger} key={index} />
              ))}
            </div>
          </section>

          <section className={`mb-[var(--marginBtwSection)]`}>
            <div className={` flex items-center justify-between mb-1 `}>
              <div>
                <h3>LAST 10 TRANSACTIONS</h3>
              </div>
              <div className="flex justify-between">
                <ExportFile
                  data={transaction}
                  name="Last 10 Transactions"
                  tableRef={tableRef}
                />
              </div>
            </div>

            <div>
             

              <div>
                <DataTable
                  value={transaction}
				  header={headers}
                  tableStyle={{ minWidth: "100%" }}
                  size={size}
                  paginator
                  rows={10}
                  removableSort
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  filters={filters}
                  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                  currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  paginatorLeft={paginatorLeft}
                  paginatorRight={paginatorRight}
                  globalFilterFields={[
                    "dateOfTransaction",
                    "chargerName",
                    "ChargerType",
                    "totalUnitChargedInEnergy",
                    "status",
                    "totalAmount",
                  ]}
                  
                  emptyMessage="No transactions found."
                >
                  <Column field="index" header="#"></Column>
                  <Column
                    field="dateOfTransaction"
                    header="Date"
                    sortable
                    body={getDate}
                  ></Column>
                  <Column
                    field="chargerName"
                    header="Charger"
                    sortable
                  ></Column>
                  <Column
                    field="chargerType"
                    header="Charger Type"
                    sortable
                    body={ChargerType}
                  ></Column>
                  <Column
                    field="totalAmount"
                    header="Amount"
                    sortable
                    body={totalAmount}
                  ></Column>
                  {/* <Column field="Balance" header="Balance" sortable body={balance}></Column> */}
                  <Column
                    field="totalUnitChargedInEnergy"
                    header="Energy"
                    sortable
                    body={Energy}
                  ></Column>
                  <Column field="Status" header="Status" body={Status}></Column>
                  <Column field="Action" header="Action" body={action}></Column>
                </DataTable>
              </div>
            </div>
          </section>
          {TModal && (
            <Modal closeModal={setModal}>
              <TransactionDetails transactionId={transactionIdd} />
            </Modal>
          )}
        </section>
      )}
    </>
  );
}
