import React, {useState,useEffect} from "react";
import "./style.css"
import nextArrow from "../../assets/svg/next-arrow.svg";
import axios from "axios"


const Transactions = () => {

    const [companyTransactions, setCompanyTransactions] = useState([])

     //base url
  const url = "http://evapi.estations.com"

  // berarer token from local storage
  const token = localStorage.getItem("token")

  //company id
  const companyId = localStorage.getItem("id");

    const transactions = () =>{
        axios.get(url + "/Transactions/get-last10-transactions/" + companyId,  { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
            console.log(res)
          setCompanyTransactions(res.data)
        })
    }

    useEffect(()=>{
        transactions();
      }, [])

    return ( <div >
        <div className="py-[1.5rem]">
        <p>Last 10 Transactions</p>
        </div>
        {/* table */}
        <div className="bg-white py-[0.5rem]  px-[1.5rem]  ">
            <table className=" text-left  w-[100%] ">
                <tr className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 text-base font-semibold ">
                    <th className="w-[5%] py-[1.25rem] "> <input className="checkbox" type="checkbox" checked></input> </th>
                    
                    <th className="w-[10%]">#</th>
                    <th className="w-[20%]">Charger</th>
                    <th  className="w-[12%]">Amount</th>
                    <th  className="w-[12%]">Energy</th>
                    <th  className="w-[20%]">Date</th>
                    <th  className="w-[15%]">Status</th>
                </tr>
                
                {companyTransactions.map((compTransaction)=>(
                        <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                        <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} checked/></th>
                            <td>{compTransaction.transactionId}</td>
                            <td>charger X1</td>
                            <td>{compTransaction.totalAmount}</td>
                            <td>{compTransaction.kwCharged}Kw</td>
                            <td>{compTransaction.dateOfTransaction}</td>
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
    </div> );
}
 
export default Transactions;