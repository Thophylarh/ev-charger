import React, {useEffect, useState} from "react";
// import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../../../components/Hero/hero"
import ChargerStat from "../../../components/chargerStat/charger"
import ListOfChargers from "../../../components/listOfChargers/listOfChargers";
import Transactions from "../../../components/last10Transactions/transactions";
// import FilteredHero from "../../../components/filteredHero/filteredHero"

import axios from "../../../lib/axiosInterceptor";
import {DatePicker} from "antd"
import moment from "moment";


const Index = () => {

const [data, setData] = useState("")
 const [totalChargers, setTotalChargers] = useState("")
  const [noOfActiveChargers, setNoActiveChargers] = useState("")
  const [noOfflineChargers, setNoOfflineChargers] = useState("")
  const [totalEnergy, setTotalEnergy] = useState("")
  const [stationChargerList, setStationChargerList] = useState([])
  const [stationTransactions, setStationTransactions] = useState([])
  const [revenue, setRevenue] = useState([])
  const [stationgraphData, setstationGraphData] = useState([])
  const [fRevenue, setFRevenue] = useState([])
  const [fGraph, setFGraph] = useState([])
  const [filtered, setfiltered] = useState(false)



  //base url  
const url = ""

//TOKEN
const token = localStorage.getItem("user-token")

   const companyId = localStorage.getItem("id");
    const stationId = localStorage.getItem("stationId");

//get station details
const getStationDetails = () =>{
  axios.get(url +"/Stations/get-station-by-id/" + stationId, { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    setData(res.data[0])
    // console.log(res.data)
  })
}

  //total number of station chargers
  const GetstationChargers = () =>{
    axios.get(url + `/Chargers/get-total-station-charger-count/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}})
    .then((res) =>{
      
      setTotalChargers(res.data)

    })
  }

   //total number of active chargers 
  const GetactiveChargers = () =>{
    axios.get(url + `/Chargers/get-station-active-charger-count/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setNoActiveChargers(res.data)
    })
  }

    // //total number of offline chargers 
  const GetofflineChargers = () =>{
    axios.get(url + `/Chargers/get-station-offline-charger-count/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setNoOfflineChargers(res.data)
    })
  }

    // //total energy consumed
  const GetTotalEnergy= () =>{
    axios.get(url + `/Chargers/get-total-energy-consumed-by-station/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setTotalEnergy(res.data)
    })
  }

   //get list of chargers in station
   const getListOfChargers= () =>{
    axios.get(url + `/Chargers/get-list-station-charger/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      // console.log(res)
      setStationChargerList(res.data)
     
    })
  }

 //station transactions
    const station = "station";
 
  const transactions = () =>{
    const limit = 10;
    axios.get(url +`/Transactions/get-last10-transactions/station/${stationId}/${limit}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
    .then((res)=>{
        
      setStationTransactions(res.data)
    })
}

//revenue for station 
const Revenue = () =>{
  axios.get(url +`/Transactions/get-revenue/station/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    setRevenue(res.data)
    
    
  })
}

//graph data - revenue by month for stations
const revenuebymonth = () =>{
   
  axios.get(url +`/Transactions/get-group-transaction-by-month/station/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    console.log(res)
    setstationGraphData(res.data)

    
    
  })
}

//on select date filter 
const  onSelectDate = async (date, dateString) =>{

 const month = moment(dateString).format("M")
 const year = moment(dateString).format("Y")

 axios.get(url +`/Transactions/get-revenue-by-month-year/station/${stationId}/${month}/${year}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
 .then((res)=>{
   
 setFRevenue(res.data)
 setfiltered(true)
})

axios.get(url +`/Transactions/get-transaction-by-month-year/station/${stationId}/${month}/${year}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
.then((res)=>{
  setFGraph(res.data)
  console.log(res)
})
}
   
 
 

    
 

useEffect(()=>{
  getStationDetails ();
  GetstationChargers();
  GetactiveChargers();
  GetofflineChargers();
  GetTotalEnergy();
  getListOfChargers();
  transactions();
  Revenue();
  revenuebymonth();
}, [])


  return (
    <div className="w-full h-[100vh]  py-2 px-4 ">
    <div className="w-full h-screen py-2 px-4 overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center">
          <div>
          <h1 className="font-bold text-2xl">Hello, {data.StationName} </h1>
           
          </div>
         

          <div>
          <DatePicker  picker="month" onChange={onSelectDate} />
          
          </div>
        
          
        </div>
        <p className="text-gray-400 font-normal text-sm">Explore your station dashboard here</p>
        <div className="mt-[1rem]">
        {/* {filtered? <FilteredHero fRevenue={fRevenue} graphData={fGraph}/>:  <Hero revenue={revenue} graphData={stationgraphData}/>  } */}
        </div>
        <ChargerStat total={totalChargers} ActiveChargers={noOfActiveChargers} OfflineChargers={noOfflineChargers} TotalEnergy={totalEnergy}/>
        <ListOfChargers chargers={stationChargerList}/>
        <Transactions transactions={stationTransactions}/>
      </div>
      
    </div>
    </div>
  );
};

export default Index;
