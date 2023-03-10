import React from "react";
import "./style.css"
import nextArrow from "../../assets/svg/next-arrow.svg";


const transactions = () => {
    return ( <div >
        <div className="py-[1.5rem]">
        <p>Last 10 Transactions</p>
        </div>
        {/* table */}
        <div className="bg-white py-[0.5rem]  px-[1.5rem]  ">
            <table className=" text-left  w-[100%] ">
                <tr className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 text-base font-semibold ">
                    <th className="w-[5%] py-[1.25rem] "> <input className="check-box" type="checkbox" disabled="true" checked="checked"></input> </th>
                    
                    <th className="w-[10%]">#</th>
                    <th className="w-[20%]">Charger</th>
                    <th  className="w-[12%]">Amount</th>
                    <th  className="w-[12%]">Energy</th>
                    <th  className="w-[20%]">Date</th>
                    <th  className="w-[15%]">Status</th>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-green-500 px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Completed</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Electric keke Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-green-500 px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Completed</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Innoson Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Incomplete</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Range rover Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Cancelled</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <td className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></td>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <td className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></td>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <td className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></td>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
                <tr className="border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 font-normal text-sm">
                <th className="py-[0.75rem]"><input className="checkbox" type={"checkbox"} disabled="disabled" checked="checked"/></th>
                    <td>1784</td>
                    <td>Tesla-Charger</td>
                    <td>$500.00</td>
                    <td>500Kw</td>
                    <td>0ctober 30, 2017</td>
                    <td><button className="bg-black px-[0.75rem] py-[0.25rem] text-white text-small rounded-xl">Overdue</button></td>
                </tr>
            </table>

            <div className="flex justify-between py-[4rem]">
            <p>1-50 of 2,500</p>
           
            <p className="pl-[52rem]">1-10 </p>
            <img className="" src={nextArrow} />
           
            </div>
        </div>
    </div> );
}
 
export default transactions;