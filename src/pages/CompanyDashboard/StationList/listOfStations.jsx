import dropDown from "../../../assets/svg/dropDownArrow.svg";
import nextArrow from "../../../assets/svg/next-arrow.svg";
import {useState, useEffect, useRef} from "react"
import axios from "../../../lib/axiosInterceptor";
import { useNavigate } from "react-router";

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
import Loader from "../../../components/Loader";


const ListOfStations = () => {
    const Navigate = useNavigate();
    const [stations, setStations] = useState([])
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

    //company id
    const companyId = localStorage.getItem("id");

    

    //get stations under a company 
    const getData = ( ) =>{
      setLoading(true)
        axios.get( "/Stations/get-station-by-company/" + companyId)
        .then((res)=>{
        //   console.log(res.data, "this is the data")
          setStations(res.data)
          console.log(res.data)
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        })
      }
     
     
      useEffect(()=>{
        getData()
      }, [])

     

      const viewStations = (id, e) =>{
      
        window.localStorage.setItem("stationId", id);
      
        // Navigate("/station")
        Navigate({
          pathname: '/station',
          search: `?stationId=${id}&companyId=${companyId}`,
        });
      }

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

      const Revenue = (stations) => {
        return <p>{formatNumber(stations.Revenue, true)}</p>;
      };

      const Energy = (stations) => {
        return (
          <p>
            {formatNumber(stations.EnergyConsumed, false)} KWH
          </p>
        );
      };

      const Location = (stations) => {
        return (
          <p>
            {stations.LocationDetails.CityOrTown}
          </p>
        );
      };


      const action = (station) => {
        return (
          <button
          onClick={(e)=>{viewStations(station.Id, e)}}
      className="h-[31px] w-[96px] rounded-md text-[#475467] font-semibold text-xs leading-5 border border-solid border-1 border-[#475467]" 
      >
           
           <p>View station</p>
         </button>
        );
      };

      const headers = renderHeader();

    return ( 
    <>
    {loading && (
      <Loader/>
    )}

    {!loading && (
    <div className="py-[1.5rem] px-[1.5rem] ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl leading-7 pb-[0.5rem]">My Stations</h1>
            <p className="font-normal text-sm leading-5 text-[#98A2B3] pb-[1rem]">Breakdown of your company's stations</p>
          </div>
          
          
        </div>
        
        <div className="bg-white py-[0.5rem]  px-[1.5rem] h-[30rem] ">
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
                    "StationName",
                    "Revenue",
                    "EnergyConsumed",
                    "CityOrTown",
                    "Chargers",
                    "Action",
                  ]}
                  
                  emptyMessage="No transactions found."
                >
                  <Column field="Id" header="#"></Column>
                  <Column
                    field="StationName"
                    header="Station Name"
                    sortable
                    
                  ></Column>
                  <Column
                    field="Revenue"
                    header="Revenue"
                    body={Revenue}
                    sortable
                  ></Column>
                  <Column
                    field="EnergyConsumed"
                    header="Energy Consumed"
                    body={Energy}
                    sortable
                   
                  ></Column>
                  <Column
                    field="CityOrTown"
                    header="Location"
                    body={Location}
                    sortable
                   
                  ></Column>
                  {/* <Column field="Balance" header="Balance" sortable body={balance}></Column> */}
                  <Column
                    field="Chargers"
                    header="Chargers"
                    sortable
                   
                  ></Column>
                 
                  <Column field="Action" header=" " body={action}></Column>
                </DataTable>
              </div>
            {/* <table className=" text-left  w-[100%] ">
                <thead className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-[#667085] text-sm leading-5 font-semibold ">
                    <th className="py-[1.25rem] w-[4rem]">#</th>
                    <th className="w-[10rem]">Station Name</th>
                    <th className="w-[13rem]">Revenue</th>
                    <th className="w-[12rem]">Energy Consumed</th>
                    <th className="w-[10rem]">Location</th>
                    <th className="w-[5rem]">Chargers</th>
                    <th className="w-[10rem]"></th>
                </thead>

                
                {stations.map((station) =>(
                    <tr key={station.Id} className=" border-b-2 border-solid border-[#47546] ">
                        <td className="py-[1rem]">{station.Id}</td>
                        <td>{station.StationName}</td>
                        <td>₦{station.Revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td>{station.EnergyConsumed?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}kWh</td>
                        <td>{station.LocationDetails.CityOrTown}</td>
                        <td>{station.Chargers}</td>
                        <td><button  onClick={(e)=>{viewStations(station.Id, e)}}
                        className="h-[31px] w-[96px] rounded-md text-[#475467] font-semibold text-xs leading-5 border border-solid border-1 border-[#475467]" 
                        >View station</button></td>
                    </tr>
                ))}
               
              
               
            </table> */}
            {/* <div className="flex justify-between py-[4rem]">
            <p>1-50 of 2,500</p>
           
            <p className="pl-[52rem]">1-10 </p>
            <img className="" src={nextArrow} />
           
            </div> */}
        </div>

        
        
    </div>
    )}
    </> );
}
 
export default ListOfStations;