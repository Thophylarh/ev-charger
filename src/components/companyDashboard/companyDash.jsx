import React, {useEffect, useState} from "react";
import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../Hero/hero"
import ChargerStat from "../chargerStat/charger"
import ListOfChargers from "../listOfChargers/listOfChargers";
import Transactions from "../last10Transactions/transactions";
import axios from "axios"

const Index = () => {
  const [totalCompanyChargers, setTotal] = useState("")
  const [data, setData] = useState("")
  const [companyActiveChargers, setActiveChargers] = useState("")
  const [OfflineCharger, setOfflineChargers] = useState("")
  const [companyEnergy, setCompanyEnergy] = useState("")
  const [chargerList, setChargerList] = useState([])

  //base url
  const url = "http://evapi.estations.com"

// berarer token from local storage
const token = localStorage.getItem("token")

//company id
const id = localStorage.getItem("id")

//get company details
const getData = ( ) =>{
  axios.get(url + "/Companies/get-company-by-id/"+id,  { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    setData(res.data)
    // console.log(data)
  })
} 

//number of chargers in company 
const GetcompanyChargers = () =>{
  axios.get(url + `/Chargers/get-total-company-charger-count/${id}`,{ headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res) =>{
    
    setTotal(res.data)
   
  })
}

//get number of active chargers in company 
const GetcompanyActiveChargers = () =>{
  axios.get(url + `/Chargers/get-company-active-charger-count/${id}`,{ headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res) =>{
    
    setActiveChargers(res.data)
   
  })
}

//get number of offline chargers in company
const GetOfflineChargers = () =>{
  axios.get(url + `/Chargers/get-company-offline-charger-count/${id}`,{ headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res) =>{
    
    setOfflineChargers(res.data)
   
  })
}

//get Company energy consumption 
 
  const GetTotalEnergy= () =>{
    axios.get(url + `/Chargers/get-total-energy-consumed-by-company/${id}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setCompanyEnergy(res.data)
    })
  }

  //get list of chargers
  const getListOfChargers= () =>{
    axios.get(url + `/Chargers/get-list-company-chargers/${id}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      console.log(res.data)
      setChargerList(res.data)
      console.log(chargerList)
    })
  }


//on mount get data
useEffect(()=>{
  getData();
  GetcompanyChargers();
  GetcompanyActiveChargers();
  GetOfflineChargers();
  GetTotalEnergy();
  getListOfChargers();
}, [])




  return (
    <div className="w-full h-[100vh]  py-2 px-4 ">
    <div className="w-full h-screen py-2 px-4 overflow-y-scroll">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Hello, {data.companyName} </h1>
          </div>
          <div className="flex w-[10rem] justify-between items-center bg-black rounded-md  px-5 py-1">
            <p className=" text-white font-light text-base ">This month</p>
            <img className="" src={Arrow} alt="" /> 
            
          </div>
          
        </div>
        <p className="text-gray-400 font-normal text-sm">Explore your company dashboard here</p>
        <div className="mt-[1rem]">
         <Hero/>
        </div>
        <ChargerStat total={totalCompanyChargers } ActiveChargers={companyActiveChargers} OfflineChargers={OfflineCharger} TotalEnergy={companyEnergy}/>
        <ListOfChargers chargers={chargerList}/>
        <Transactions/>
      </div>
      
    </div>
    </div>
  );
};

export default Index;
