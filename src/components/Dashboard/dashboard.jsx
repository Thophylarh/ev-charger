import React, {useEffect, useState} from "react";
import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../Hero/hero"
import ChargerStat from "../chargerStat/charger"
import ListOfChargers from "../listOfChargers/listOfChargers";
import Transactions from "../last10Transactions/transactions";
import axios from "axios"

const Index = () => {
//base url  
const url = "http://evapi.estations.com"
const [data, setData] = useState("")
 const [totalChargers, setTotalChargers] = useState("")
  const [noOfActiveChargers, setNoActiveChargers] = useState("")
  const [noOfflineChargers, setNoOfflineChargers] = useState("")
  const [totalEnergy, setTotalEnergy] = useState("")

const token = localStorage.getItem("token")
const id = localStorage.getItem("stationId")
   const companyId = localStorage.getItem("id");
    const stationId = localStorage.getItem("stationId");

//get station details
const getStationDetails = () =>{
  axios.get(url +"/Stations/get-station-by-id/" + id, { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    setData(res.data)
    console.log(res.data)
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


useEffect(()=>{
  getStationDetails ();
  GetstationChargers();
  GetactiveChargers();
  GetofflineChargers();
  GetTotalEnergy();
}, [])


  return (
    <div className="w-full h-[100vh]  py-2 px-4 ">
    <div className="w-full h-screen py-2 px-4 overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Hello, {data.stationName} </h1>
          </div>
          <div className="flex w-[10rem] justify-between items-center bg-black rounded-md  px-5 py-1">
            <p className=" text-white font-light text-base ">This month</p>
            <img className="" src={Arrow} alt="" /> 
            
          </div>
          
        </div>
        <p className="text-gray-400 font-normal text-sm">Explore your station dashboard here</p>
        <div className="mt-[1rem]">
         <Hero/>
        </div>
        <ChargerStat total={totalChargers} ActiveChargers={noOfActiveChargers} OfflineChargers={noOfflineChargers} TotalEnergy={totalEnergy}/>
        <ListOfChargers/>
        <Transactions/>
      </div>
      
    </div>
    </div>
  );
};

export default Index;
