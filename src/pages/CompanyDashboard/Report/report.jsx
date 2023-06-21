import React, {useEffect, useState, useRef} from "react"
import axios from "../../../lib/axiosInterceptor";
import nextArrow from "../../../assets/svg/next-arrow.svg";
import moment from "moment";
import {DatePicker} from "antd"
import Overview from "../../../components/Company/Overview/overview";



import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDate } from "../../../utils/formatDate";
import ExportFile from "../../../components/exportComponent/ExportFile";
import Loader from "../../../components/Loader";

const Report = () =>{
    const { RangePicker } = DatePicker;

    const [Transactions, setCompanyTransactions] = useState([])

    const [selectedDate, setDate] = useState()

    const [loading, setLoading] = useState(false)
    
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
        <div className="flex justify-end">
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


  
  //company id
  const id = localStorage.getItem("id")

  //date picker function
	const selectDate = (date, dateString) =>{
		setDate(dateString)
		
	}

  //get all company transactions
  const CTransactions =  () => {

    let url;
		if (selectedDate === "" || !selectedDate) {
			url = `/Transactions/get-all-transactions/company/${id}`;
		} else {
			// let splitDate = selectedDate.split(",")
			// let start = selectedDate[0]
			// let end = selectedDate[1]

			url = `/Transactions/get-all-transactions-by-date/company/${id}/${selectedDate[0]}/${selectedDate[1]}`;
		}

    setLoading(true)
   
    axios.get(url)
    .then((res)=>{
      
      let index = 0;

    res.data.sort((a, b) => b.id - a.id);
    res.data.forEach((el) => {
      el.index = ++index;
    });
      
      console.log(res)
      setCompanyTransactions(res.data)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    })
  }


 

	useEffect(() => {
		CTransactions();
	}, [selectedDate]);
  
// //on mount get data
// useEffect(()=>{
//     CTransactions();
  
//   }, [])

  const Revenue = (Transactions) => {
    return <p>{formatNumber(Transactions.totalAmount, true)}</p>;
  };

  const Energy = (Transactions) => {
    return (
      <p>
        {formatNumber(Transactions.totalUnitChargedInEnergy, false)} KWH
      </p>
    );
  };

  const TDate = (Transactions) => {
    return (
      <p>
       
        {moment(Transactions.dateOfTransaction).format(
          " MMMM DD YYYY HH:mm"
        )}
      </p>
    );
  };

  const chargeTime = (Transactions) => {
    return (
      <p>
        {(Transactions.totalUnitChargedInTime / 60)?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} hour(s) 
      </p>
    );
  };


  const headers = renderHeader();
  return (
    <>
    {loading && (
      <Loader/>
    )}

    {!loading && (

    
    <section className=" h-[100vh] overflow-y-scroll">
    <div className="flex justify-between m-4">
    <div>
    <h1>Company Report</h1>
    <p className="subHeader">Here is an overview and breakdown of your company's energy revenue and consumption.</p>
    </div>
    <div>
        <RangePicker onChange={selectDate}/>
    </div>
   
    </div>
    <div className="bg-white py-[0.5rem]  px-[1.5rem]  ">
      <section className="mb-[28px]">
        <Overview id={id} />
      </section>
      <div className="flex justify-between">
        <h3 className="mb-[10px] text-lg">List of transactions</h3>

        <div className="flex justify-between">
                <ExportFile
                  data={Transactions}
                  name="Station Summary"
                  tableRef={tableRef}
                />
              </div>
        </div>
       
        <div>
                <DataTable
                  value={Transactions}
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
                    "StationName",
                    "stationName",
                    "totalUnitChargedInEnergy",
                    "dateOfTransaction",
                    "totalUnitChargedInTime",
                    "Action",
                  ]}
                  
                  emptyMessage="No transactions found."
                >
                  <Column field="index" header="#"></Column>

                  <Column
                    field="stationName"
                    header="Station Name"
                    sortable
                    
                  ></Column>

                  <Column
                    field="totalAmount"
                    header="Amount"
                    sortable
                    body={Revenue}
                    
                  ></Column>
                  
                  <Column
                    field="totalUnitChargedInEnergy"
                    header="Energy Consumed"
                    body={Energy}
                    sortable
                   
                  ></Column>

                  <Column
                    field="dateOfTransaction"
                    header="Date"
                    body={TDate}
                    sortable
                   
                  ></Column>
                  {/* <Column field="Balance" header="Balance" sortable body={balance}></Column> */}
                  <Column
                    field="totalUnitChargedInTime"
                    header="Charge Duration"
                    sortable
                   body={chargeTime}
                  ></Column>
                 
                  
                </DataTable>
              </div>
          
        </div>
        </section>
        )}
    </>
    )
}


export default Report