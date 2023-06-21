import { Table } from "antd";
import React, { useEffect, useState, useRef } from "react";
import CustomerDetailsCard from "../../../components/Branch/CustomerDetailsCard";
import eye from "../../../assets/svg/eye.svg";
import activeDot from "../../../assets/svg/activeDot.svg";

import axios from "../../../lib/axiosInterceptor";
import moment from "moment";

import { NavLink, Navigate, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { formatNumber } from "../../../utils/formatNumber";
import { splitNumber } from "../../../utils/splitNumber";
import { convertTime } from "../../../utils/convertTime";
import { lastCharged } from "../../../utils/lastCharged";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

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
import Modal from "../../../components/modals/modal";
import TransactionDetails from "../../../components/modals/transactionDetails";


export default function CustomerDetails() {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [moneySpent, setMoneySpent] = useState("");
  const [vehicles, setVehicles] = useState();
  const [transaction, setTransaction] = useState();
  const [TModal, setModal] = useState(false);
  const [transactionIdd, setTransactionIdd] = useState();

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

  const tableRef = useRef();

  const [searchParams] = useSearchParams();

  const Navigate = useNavigate();

  let cusId = searchParams.get("cus");
  let companyId = searchParams.get("companyId");
  let StationId = searchParams.get("stationId");

  const getCustomerDetails = () => {
    setIsLoading(true);
    axios
      .get(`customers/get-customer-by-id/${cusId}`)
      .then((res) => {
        

        console.log(res?.data);
        setMoneySpent(res?.data?.customerDetails?.TotalAmountSpent);

        setDetails(res?.data?.customerDetails);
        setVehicles(res?.data?.vehicleDetails);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response.data);
        setIsLoading(false);
      });

	  axios.get(`/Transactions/get-all-transactions/customer/${cusId}`)
	  .then((res)=>{
		let index = 0;

        res?.data?.forEach((el) => {
        	el.index = ++index;
        });

		
		setTransaction(res?.data)
	  })
  };

  useEffect(() => {
    getCustomerDetails();
  }, []);

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

 

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
  </>
    );
  };

  const getDate = (transaction) => {
    return (
      <p>
        {moment(transaction.dateOfTransaction).format(
          " MMMM DD YYYY HH:mm"
        )}
      </p>
    );
  };

  const ChargerType = (transaction) => {
    return <p>{chargerType(transaction.chargerType)}</p>;
  };

  const totalAmount = (transaction) => {
    return <p>{formatNumber(transaction.totalAmount, true)}</p>;
  };

  const Energy = (transaction) => {
    return (
      <p>
        {formatNumber(transaction.totalUnitChargedInEnergy, false)} KWH
      </p>
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

  const headers = renderHeader();
  // let column = [
  // 	{
  // 		title: "#",
  // 		dataIndex: "index",
  // 		key: "index",
  // 	},

  // 	{
  // 		title: "First name",
  // 		dataIndex: "firstname",
  // 		key: "firstname",
  // 	},

  // 	{
  // 		title: "Last name",
  // 		dataIndex: "lastname",
  // 		key: "lastname",
  // 	},

  // 	{
  // 		title: "Email address",
  // 		dataIndex: "emailAddress",
  // 		key: "emailAddress",
  // 	},

  // 	{
  // 		title: "Money  Spent",
  // 		dataIndex: "totalAmountSpent",
  // 		key: "totalAmountSpent",
  // 		sorter: {
  // 			compare: (a, b) => a.totalAmountSpent - b.totalAmountSpent,
  // 			multiple: 3,
  // 		  },
  // 	},

  // 	{
  // 		title: "Phone number",
  // 		dataIndex: "phone",
  // 		key: "phone",
  // 	},

  // 	{
  // 		title: "Number of Vehicles",
  // 		dataIndex: "numberOfVehiclesOnFile",
  // 		key: "numberOfVehiclesOnFile",
  // 		sorter: {
  // 			compare: (a, b) => a.numberOfVehiclesOnFile - b.numberOfVehiclesOnFile,
  // 			multiple: 3,
  // 		  },
  // 	},

  // 	{
  // 		title: "Energy consumed",
  // 		dataIndex: "totalEnergyCharged",
  // 		key: "totalEnergyCharged",
  // 		sorter: {
  // 			compare: (a, b) => a.totalEnergyCharged - b.totalEnergyCharged,
  // 			multiple: 3,
  // 		  },
  // 	},
  // ];
  const customerList = () =>{
	
		Navigate({
			pathname: "/station/customers",
			search: `?&stationId=${StationId}&companyId=${companyId}`,
		  })
		}
  
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
            <section className={`mb-[var(--marginBtwSection)]`}>
              <div className={`flex justify-between items-center `}>
                <div>
                  <div className={`flex items-center`}>
                    <h4
                      className="mr-[1rem]"

					  onClick={customerList}
                    >
                      Customers
                    </h4>

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
                  <div className=" grid grid-cols-3  ">
                    <div className="revenueBlock">
                      <h3>MONEY SPENT</h3>

                      <h5>NGN {moneySpent}</h5>
                    </div>
                    <div className="revenueBlock">
                      <h3>VEHICHLES</h3>

                      <h5>{details?.NumberOfVehiclesOnFile}</h5>
                    </div>

                    <div className="revenueBlock">
                      <h3>LAST CHARGE</h3>

                      <h5>{lastCharged(details?.LastTransactionDate)}</h5>
                    </div>
                  </div>
                </div>

                <div className=" col-span-3 h-[100%] ">
                  <div className="h-[100%]  totalRevenueBlock text-white pl-[1.25rem]">
                    <h3>ENERGY CONSUMPTION</h3>

                    <h5>
                      {formatNumber(details?.TotalEnergyCharged)}
                      <sup>kw</sup>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </section>

            <section className={`mb-[var(--marginBtwSection)]`}>
              {/* {details?.vehicleDetails?.length > 1 && (
								<div className="justify-end flex mb-2">
									<NavLink
										to={{
											pathname: "/station/evChargers",
											// search: `?stationId=${stationId}&companyId=${companyId}`,
										}}
									>
										<button className="border-2  border-gray-400 text-sm p-[0.5rem] rounded-md text-[var(--grey700)]">
											See all Vehicles
										</button>
									</NavLink>
								</div>
							)} */}

              <div className="bg-[var(--grey50)] p-[1.25rem] ">
                {vehicles?.map((vehicle) => (
                  <div className="grid grid-cols-3 gap-4">
                    <CustomerDetailsCard isActive={true} vehicle={vehicle} />
                    {vehicles?.length === 1 && (
                      <>
                        <CustomerDetailsCard isActive={false} />
                        <CustomerDetailsCard isActive={false} />
                      </>
                    )}
                    {vehicles?.length === 2 && (
                      <>
                        <CustomerDetailsCard isActive={false} />
                      </>
                    )}
                  </div>
                ))}

                {/* {details?.vehicleDetails?.length == 1 ? (
									<>
										<div className="grid grid-cols-3 gap-4">
											<CustomerDetailsCard isActive={true} />
											<CustomerDetailsCard isActive={true} />
										</div>
									</>
								) : (
									<CustomerDetailsCard isActive={true} />
								)} */}
              </div>
            </section>
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
