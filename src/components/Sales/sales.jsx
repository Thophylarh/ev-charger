import React, {useEffect, useState} from "react"
import axios from "axios";
import nextArrow from "../../assets/svg/next-arrow.svg";
import moment from "moment";
import {DatePicker} from "antd"
import Hero from "../Hero/hero"




const Sales = () =>{
    const { RangePicker } = DatePicker;

    const [sales, setSales] = useState([])
    const [Cname, setName] = useState("")
    const [revenue, setRevenue] = useState([])
  const [stationgraphData, setstationGraphData] = useState([])

    //base url
  const url = "http://evapi.estations.com"

  // bearer token from local storage
  const token = localStorage.getItem("user-token")
  
  //company id
  const id = localStorage.getItem("id")

  //station id 
  const stationId = localStorage.getItem("stationId");

  //get all company transactions
  const CTransactions =  () => {
   
    axios.get(url +`/Transactions/get-all-transactions/station/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
    .then((res)=>{
     
      setSales(res.data)
    })
  }

  //graph data - revenue by month for stations
const revenuebymonth = () =>{
   
  axios.get(url +`/Transactions/get-group-transaction-by-month/station/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
   
    setstationGraphData(res.data)

    
    
  })
}
//revenue for station 
const Revenue = () =>{
  axios.get(url +`/Transactions/get-revenue/station/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
  .then((res)=>{
    setRevenue(res.data)
    
    
  })
}
 

  
//on mount get data
useEffect(()=>{
    CTransactions();
  }, [])

  return (
    <>
   <div className="h-[100vh] overflow-y-scroll">
    <div className="flex justify-between m-4">
    <div>
    <h1>Station sales</h1>
    </div>
    <div>
        <RangePicker/>
    </div>
   
    </div>

    <div className='pb-[3rem] px-[2rem]'>
    <Hero revenue={revenue} graphData={stationgraphData}/>

    </div>

    <div className="bg-white py-[0.5rem]  px-[1.5rem]  ">
            <table className=" text-left  w-[100%] ">
                <tr className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 text-base font-semibold ">
                    <th className="w-[5%] py-[1.25rem] "> <input className="checkbox" type="checkbox" checked></input> </th>
                    
                    <th className="w-[10%]">#</th>
                    <th className="w-[20%]">Charger Name</th>
                    <th  className="w-[12%]">Amount</th>
                    <th  className="w-[12%]">Energy</th>
                    <th  className="w-[20%]">Date</th>
                    <th className="w-[15%]"> Charge Duration</th>
                    <th  className="w-[15%]">Status</th>
                    
                </tr>
                
                {sales.map((sale)=>(
                        <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                        <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} checked/></th>
                            <td>{sale.transactionId}</td>
                            
                            <td></td>
                            <td>₦{sale.totalAmount?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            <td>{sale.totalUnitChargedInEnergy?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}Kw</td>
                            <td>{moment(sale.dateOfTransaction).format(' MMMM DD YYYY HH:mm')}</td>
                            <td>{(sale.totalUnitChargedInTime / 60)?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " hours(s)"}</td>
                            <td><button className="w-[6rem] px-[0.75rem] py-[0.25rem] bg-[#E8F8EE]  border border-solid border-1 border-[#68D08C] rounded-xl text-[#15833C] font-semibold text-xs leading-5">Completed</button></td>
                        </tr>
                ))}
                
                
            </table>

            <div className="flex justify-between py-[4rem]">
            <p>1-50 of 2,500</p>
           
            <p className="pl-[52rem]">1-10 </p>
            <img className="" src={nextArrow} />
           
            </div>
        </div>
        </div>
    </>
    )
 }


export default Sales;