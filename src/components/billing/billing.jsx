import { useState, useEffect } from "react";
import dropDown from "../../assets/svg/dropDownArrow.svg";
import PriceCharge from "./priceCharge";
import blueSunCircle from "../../assets/svg/blueSunCircle.svg"
import Suncircle from "../../assets/svg/sunCircle.svg";
import nextArrow from "../../assets/svg/next-arrow.svg";
import axios from "axios";
import moment from "moment";


const Billing = () => {

    const [billing, setBilling] = useState("")
    const [history, setHistory] = useState([])

    

     //base url
  const url = "http://evapi.estations.com"

  // berarer token from local storage
  const token = localStorage.getItem("token")
  
  //company id
  const id = localStorage.getItem("id")

  //get company details
const currentBilling = ( ) =>{
    axios.get(url + "/Billings/get-current-billing/"+ id,  { headers:{ 'Authorization': `Bearer ${token}`}})
    .then((res)=>{
      setBilling(res.data)
  
    })
  } 

    //get billing log 
    const billingLog = ( ) =>{
    axios.get(url + "/Billings/get-all-billing-log/"+id,  { headers:{ 'Authorization': `Bearer ${token}`}})
    .then((res)=>{
      console.log(res)
      setHistory(res.data)
    })
  } 

  //on mount get data
    useEffect(()=>{
  currentBilling()
  billingLog()
  }, [])

    return ( <div className="w-full h-screen p-[1.5rem] overflow-y-scroll">
        <div className="flex justify-between   ">
            <div >
            <h4 className="font-bold text-2xl leading-7 pb-[1rem]">Billing</h4>
            <p className="font-medium text-base leading-5 text-[#667085] pb-[1.2rem]">Set your charger billing and price</p>
            </div>
            
            <div className="flex w-[10rem] h-[2rem] justify-between items-center bg-white rounded-md  px-[1.25rem] py-[0.25rem]">
            <p className=" text-black font-light font-sm ">This month</p>
            <img src={dropDown} alt="" />
             </div>
        </div>
        <div className="flex justify-between">
            <div>
                <PriceCharge title="Price charge for energy" icon={Suncircle} billing={billing}/>
            </div>
            <div>
                <PriceCharge title="Price charge for time" icon={blueSunCircle} billing={billing}/>
            </div>
        </div>
        <div>
            <h3 className="text-[#667085] leading-5 text-base font-normal py-[2rem]">Price change history</h3>
            <div className="bg-white py-[0.5rem]  px-[1.5rem]">
            <table className=" text-left  w-[100%] ">
                <tr className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 text-base font-semibold ">
                    <th className="w-[5%] py-[1.25rem] "> <input className="checkbox" type="checkbox" checked></input> </th>
                    
                    <th className="w-[20%]">Date</th>
                    <th className="w-[12%]">Previous price</th>
                    <th  className="w-[12%]">Changed to</th>
                    <th  className="w-[18%]">Changed By</th>
                    <th className="w-[12%]">Bill type</th>
                   
                </tr>
                {history.map((his)=>(
                      <tr className="text-[#667085] leading-5 text-sm font-normal">
                      <td className="w-[5%] py-[1.25rem] "> <input className="checkbox" type="checkbox" checked></input> </td>
                      <td>{moment(his.updatedAt).format(' MMMM DD YYYY HH:mm')}</td>
                      <td>NGN {his.previousCostPerUnitCharge}</td>
                      <td>NGN {his.costPerUnitCharge}</td>
                      <td>Administrator</td>
                      <td><button className="w-[6rem] px-[0.75rem] py-[0.25rem] bg-[#E8F8EE]  border border-solid border-1 border-[#68D08C] rounded-xl text-[#15833C] font-semibold text-xs leading-5">{his.billingType}</button></td>
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
    </div> );
}
 
export default Billing;