import React, {useState, useEffect, useRef} from "react";
import { DatePicker } from "antd";
import Overview from "../../../components/Company/Overview/overview";
import ChartOverview from "../../../components/Company/chartOverview/chartOverview";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import "./style.css"

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
import { formatNumber } from "../../../utils/formatNumber";
import { convertTime } from "../../../utils/convertTime";
import ExportFile from "../../../components/exportComponent/ExportFile";

const CompanyDashBoard = () => {
    const [searchParams] = useSearchParams();

    
  const tableRef = useRef();

    const [Name, setName] = useState()
   
    const [newDate, setNewDate] = useState();

    const [stations, setStations] = useState([])

    const id = searchParams.get("companyid")

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

    const totalAmount = (stations) => {
      return <p>{formatNumber(stations.Revenue, true)}</p>;
    };
  
    const Energy = (stations) => {
      return (
        <p>
          {formatNumber(stations.EnergyConsumed, false)} KWH
        </p>
      );
    };

    const TimeConsumed = (stations) => {
      return (
        <p>
          {formatNumber (stations.TimeConsumed, false)} seconds
        </p>
      );
    };

    // CUSTOM FUNCTIONS
	const onSelectDate = (date, dateString) => {
		setNewDate(dateString);
	};

   //get stations under a company 
   const getCustomer = ( ) =>{
    axios.get( "/Stations/get-station-by-company/" + id)
    .then((res)=>{
    //   console.log(res.data, "this is the data")

    let index = 0;

    res.data.sort((a, b) => b.id - a.id);
    res.data.forEach((el) => {
      el.index = ++index;
    });
      setStations(res.data)
      console.log(stations)
    })
  }
 
 
 
    
	//get company details
	const getData = () => {
		axios
			.get("/Companies/get-company-by-id/" + id)
			.then((res) => {
				setName(res?.data?.companyName)
			});

            //get Station number 
        
	};

    useEffect(() => {
		getData();
    getCustomer();
	}, []);

  const headers = renderHeader();

  return (
    <section>
    <section className="w-[95%] py-[1rem] mx-auto h-[100vh] overflow-y-scroll ">
      <section>
        <div className={`flex justify-between items-center `}>
          <div>
            <h4 className="mb-[8px] text-lg font-bold text-black">Hello, {Name}</h4>
            <p className="subHeader">
              Explore your company dashboard
            </p>
          </div>

          <div>
            <DatePicker picker="month" onChange={onSelectDate}/>
          </div>
        </div>
      </section>

      <section>
        <Overview id={id}  newDate={newDate}/>
      </section>
      <section>
        <ChartOverview id={id}  newDate={newDate}/>
      </section>

      <section>
        <div className="flex justify-between">

        <h3 className="mb-[20px]">Stations Summary </h3>

        <div className="flex justify-between">
                <ExportFile
                  data={stations}
                  name="Station Summary"
                  tableRef={tableRef}
                />
              </div>
        </div>
      <div>
                <DataTable
                  value={stations}
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
                    "EnergyConsumed", "StationName", "Revenue"
                  ]}
                  
                  emptyMessage="No stations found."
                >
                  <Column field="index" header="#"></Column>
                  <Column
                    field="StationName"
                    header="Station Name"
                    sortable
                   
                  ></Column>
                 
                  <Column
                    field="Revenue"
                    header="Revenue"
                    sortable
                   body={totalAmount}
                  ></Column>
                
                  <Column
                    field="EnergyConsumed"
                    header="Energy"
                    sortable
                    body={Energy}
                    
                  ></Column>

                    <Column
                    field="TimeConsumed"
                    header="Time Consumed"
                    sortable
                    body={TimeConsumed}
                  ></Column>
                
                </DataTable>
              </div>
      </section>
    </section>

    </section>
  );
};

export default CompanyDashBoard;
