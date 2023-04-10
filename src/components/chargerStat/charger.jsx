import React, {useState, useEffect} from "react";
import Chargers from "../../assets/images/charger.png";
import ActiveCharger from "../../assets/images/active-charger.png"
import OfflineCharger from "../../assets/images/offline-charger.png"
import Battery from "../../assets/images/battery.png"
import axios from "axios";

function Charger() {
  const [totalChargers, setTotalChargers] = useState("")
  const [noOfActiveChargers, setNoActiveChargers] = useState("")
  const [noOfflineChargers, setNoOfflineChargers] = useState("")
  const [totalEnergy, setTotalEnergy] = useState("")

  const url = "http://evapi.estations.com";

    const token = localStorage.getItem("token");
    const companyId = localStorage.getItem("id");
    const stationId = localStorage.getItem("stationId");

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

  //total number of offline chargers 
  const GetofflineChargers = () =>{
    axios.get(url + `/Chargers/get-station-offline-charger-count/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setNoOfflineChargers(res.data)
    })
  }

  //total energy consumed
  const GetTotalEnergy= () =>{
    axios.get(url + `/Chargers/get-total-energy-consumed-by-station/${companyId}/${stationId}`,{ headers:{ 'Authorization': `Bearer ${token}`}} )
    .then((res)=>{
      setTotalEnergy(res.data)
    })
  }
  
  useEffect(()=>{
    GetstationChargers();
    GetofflineChargers();
    GetTotalEnergy();
    GetactiveChargers();
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <p className="text-gray-600 text-base font-semibold">Ev charger statistics</p>
        <p className="text-gray-600 text-base font-semibold">
          Station energy consumption
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 flex justify-between items-center bg-white p-12">
          <div className=" border border-gray-50 border-1 rounded-md p-8 flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem] self-center" src={Chargers} alt="" />
            </div>
            <div className="text-gray-400 text-base font-normal">Number of chargers</div>
            <h4 className="pt-2  text-gray-900 text-2xl font-bold">{totalChargers}</h4>
          </div>
          <div className=" p-8  border border-gray-50 border-1 rounded-md flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem]" src={ActiveCharger} alt="" />
            </div>
            <div className="text-gray-400 text-base font-normal">Active Chargers</div>
            <h4 className="pt-2  text-gray-900 text-2xl font-bold">{noOfActiveChargers}</h4>
          </div>
          <div className=" border border-gray-50 border-1 rounded-md p-8  flex flex-col justify-center items-center">
            <div className="pb-8">
              <img className="w-[2.5rem]" src={OfflineCharger} alt="" />
            </div>
            <div className="text-gray-400  text-base font-normal">Offline Chargers</div> 
            <h4 className="pt-2 text-gray-900 text-2xl font-bold">{noOfflineChargers}</h4>
          </div>
        </div>
        <div className="col-span-1">
            <div className="bg-[#101828] h-full">
                <div className="flex flex-col justify-center items-center">
                    <img className="h-[8rem] mt-12" src={Battery} alt="" />
                    <div className="font-normal text-4xl text-white pt-[1.25rem]">
                    <h1>{totalEnergy} kw</h1>
                    </div>
                    <div className="text-gray-400 text-sm font-normal pt-[0.5rem]">
                    <p>Current consumption</p>
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Charger;
